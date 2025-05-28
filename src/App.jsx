import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { fetchData } from "./store/dataSlice";


function App() {
  const allData = useSelector((state) => state.data.posts);
  const dispatch = useDispatch();

  const fetchPosts = () => {
    dispatch(fetchData())
  }
  const showPosts = () => {
    console.log(allData);
    
  }
 
  return (
    <>
    <div style={{marginTop:"50px"}}>
      
     <button onClick={fetchPosts}>добавить пост</button>
     <button onClick={showPosts}>показать пост</button>
    </div>
    </>
  )
}

export default App
