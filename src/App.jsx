import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/dataSlice";
import { useState } from "react";



function App() {
  const [showPosts , setShowPosts] = useState();
  const {posts, isLoading , error} = useSelector((state) => state.data);
  const dispatch = useDispatch();
  //const isLoading = useSelector((state) => state.data.isLoading)
  //const error = useSelector((state) => state.data.error)

  const fetchPosts = () => {
    dispatch(fetchData())
  }

  const handleShowPosts = () => {
  if(posts.length > 0){
    setShowPosts(true)
  }
   
    
  }


  return (
  <>
  <div className="wrapper">
     <div className="buttons">
    <button onClick={fetchPosts} disabled={isLoading}>{isLoading ? "Загрузка" : "Загрузить посты"}</button>
    <button onClick={handleShowPosts}>Показать посты</button>
    {error && <p style={{color:"red"}}>Ошибка : {error}</p>}
    </div>
    <div className="textContent">
      <h1 style={{marginLeft:"20px"}}>Посты</h1>
    </div>
    {showPosts && (
      <div>
        <h3>Список постов</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p style={{fontSize:"30px",color:"#333"}}>{post.title}</p>
              <p style={{fontSize:"20px",color:"gray"}}>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
   
  </>
  );
}

export default App;
