import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading:false,
    error: null,
};

export const fetchData = createAsyncThunk("allData/fetchData", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    return data
    
})


 const dataSlice = createSlice({
    name: "allData",
    initialState,
    reducer:{},
    extraReducers: (builder) => {
    builder
    .addCase(fetchData.fulfilled, (state, action) => {
    state.isLoading = false
    state.error = null
    state.posts = action.payload 
})
    .addCase(fetchData.pending, (state) => {
         state.isLoading = true;
         state.error = null;
  
})
      
    .addCase(
      fetchData.rejected,
      (state, action) => {
          state.isLoading = false;
        state.error = action.error.message;
      
    });
      
      }
    
  },
)



export  const dataReducer = dataSlice.reducer;
