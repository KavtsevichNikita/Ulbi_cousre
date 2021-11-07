import React, {useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";


function App() {  

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' }
  ])



  return (
    <div className="App">
      <form>

        <input 
        type="text" 
        placeholder="Название поста"
        />
        <input 
        type="text" 
        placeholder="Описание поста"
        />
        <MyButton>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title="Список постов про JS"/>
    </div>
  );
}
  

export default App;
