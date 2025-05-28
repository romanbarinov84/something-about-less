import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { fetchData } from "./store/dataSlice";
import { useState } from "react";


function App() {

  const [showPosts , setShowPosts] = useState();
  const {posts,isLoading,error} = useSelector((state) => state.data);
 // const isLoading = useSelector((state) => state.data.isLoading);
 // const error = useSelector((state) => state.data.error);
  const dispatch = useDispatch();

  const fetchPosts = () => {
    dispatch(fetchData())
  }
  const handleShowPosts = () => {
    if(posts.length > 0) {
      setShowPosts(true)
    }
    
  }
 
  return (
    <>
    {!showPosts && 
    <div style={{display:"flex",flexDirection:"column",padding:"30px",background:"whitesmoke",width:"300vh",marginTop:"30px"}}>

    
    <div style={{marginTop:"50px"}}>
      
     <button onClick={fetchPosts} disabled={isLoading}>{isLoading ? "Загрузка..." : "добавить пост"}</button>
     <button onClick={handleShowPosts}>показать пост</button>
     {error && <p>Ошибка : {error}</p>}
    </div>
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center",background:"white",border:"2px solid white",marginTop:"50px",boxShadow:"2px 2px 3px gray",borderRadius:"10px"}}>
      <div style={{display:"flex",justifyContent:"center"}}>
         <h3 style={{fontSize:"60px",color:"gold"}}>Список постов</h3>
      </div>
     
      <ul style={{margin:"20px"}}>
        {posts.map((post) => 
          <li  key={post.id}>
            <p style={{fontSize:"40px",color:"#444"}}>{post.title}</p>
            <p style={{fontSize:"30px",color:"gray"}}>{post.body}</p>
            </li>
        )}
      </ul>
    </div>
    </div>
}
    </>
  )
}

export default App
