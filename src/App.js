import React, {useState,useMemo} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";

function App() {  

  const [posts, setPosts] = useState([
    { id: 1, title: 'Никита', body: 'Инфомратика' },
    { id: 2, title: 'Алёна', body: 'Дизайн' },
    { id: 3, title: 'Митя', body: 'Строитель' }
  ])

  const [selectedSort, setSelectedSort] = useState('') 
  const [searchQuery, setSearchQuery] = useState('')


  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort,posts])

  const sortedAndSearchedPosts = useMemo(() =>{
    
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))

  }, [searchQuery, sortedPosts])


  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
        value={searchQuery}
        onChange= {e => setSearchQuery(e.target.value)}
        placeholder="Поиск"
        />
        <MySelect
        value={selectedSort}
        onChange = {sortPosts}
        defaultValue = 'Сортировка'
        options = {[
          {value : 'title', name: 'По названию'},
          {value : 'body', name: 'По описанию'},
        ]}
        
        />
      </div>
      {sortedAndSearchedPosts.length
      ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов про JS" />
      : <h1 style={{textAlign: 'center'}}>Посты не найдены!!!</h1>
      }
    
    </div>
  );
}
  

export default App;
