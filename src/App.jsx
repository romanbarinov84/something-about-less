import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/dataSlice";


function App() {
  const allData = useSelector((state) => state.data.posts);
  const dispatch = useDispatch()
  const fetchPosts = () =>{
    dispatch(fetchData())
  }
  const showPosts = () =>{
    console.log(allData);
    
  }

  
  return (
    <>
    <div>
     <button style={{background:"#333",color:"white", margin:"5px"}} onClick={fetchPosts}>добавить пост</button>
     <button style={{background:"#334", color:"white",margin:"5px"}} onClick={showPosts}>показать пост</button>
    </div>
    </>
  )
}

export default App
