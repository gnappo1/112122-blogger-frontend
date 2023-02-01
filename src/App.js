import logo from './logo.svg';
import './App.css';
import PostForm from "./components/PostForm"
import {useState, useEffect} from "react"
function App() {

  const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/authors")
    .then(res => res.json())
    .then(setAuthors)
    .catch(err => alert(err))
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(setPosts)
    .catch(err => alert(err))
  }, []);

  return (
    <div className="App">
      <PostForm setPosts={setPosts} authors={authors} />
    </div>
  );
}

export default App;
