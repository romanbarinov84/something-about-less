import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    posts: []
}

 const dataSlice = createSlice({
    name: "allData",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(
            fetchData.fulfilled,
            (state,action) => {
              state.posts = action.payload
            }
        )
    }
})

 export const fetchData = createAsyncThunk("allData/fetchData", async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    return data //(то что вернется из даты и есть action payload)
})

export const dataReducer = dataSlice.reducer;