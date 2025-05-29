import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/dataSlice";
import { useRef, useState } from "react";

function App() {
  const [showPosts, setShowPosts] = useState();
  const { posts, isLoading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  //const isLoading = useSelector((state) => state.data.isLoading)
  //const error = useSelector((state) => state.data.error)
  const fetchPromise = useRef();

  const fetchPosts = () => {
    fetchPromise.current = dispatch(
      fetchData("https://jsonplaceholder.typicode.com/posts")
    );
  };

  const handleShowPosts = () => {
    if (posts.length > 0) {
      setShowPosts(true);
    }
  };

  const handleCancelFetch = () => {
    if (fetchPromise.current) {
      fetchPromise.current.abort();
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="buttons">
         {!showPosts && (<button onClick={fetchPosts} disabled={isLoading}>
            {isLoading ? "Загрузка" : "Загрузить посты"}
          </button>)} 
          <button onClick={handleShowPosts}>Показать посты</button>
          {isLoading && (
            <button onClick={handleCancelFetch}>Отменить запрос</button>
          )}
          {error && (
            <div>
              {error.status === 404 && <p>Данные не найденны</p>}
              {error.status === 0 && ""}
              {error.status === "Network Error" && (
                <p>Нет подключения к сети</p>
              )}
            </div>
          )}
        </div>
        <div className="textContent">
          <h1 style={{ marginLeft: "20px" }}>Посты</h1>
        </div>
        {showPosts && (
          <div>
            <h3>Список постов</h3>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <p style={{ fontSize: "30px", color: "#333" }}>
                    {post.title}
                  </p>
                  <p style={{ fontSize: "20px", color: "gray" }}>{post.body}</p>
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
