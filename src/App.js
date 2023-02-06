import logo from './logo.svg';
import './App.css';
import PostForm from "./components/PostForm"
import PostList from './components/PostList'
import {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"
import Notification from './components/Notification';

function App() {

  // const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([]);
  // const [error, setError] = useState({text: "", type: ""})

  // useEffect(() => {
  //   fetch("http://localhost:3000/authors")
  //   .then(res => res.json())
  //   .then(setAuthors)
  //   .catch(err => alert(err))
  // }, []);
  
  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(setPosts)
    .catch(err => alert(err))
  }, []);

  return (
    <div className="App">
      <Notification />
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <PostList posts={posts} />
        </Route>
        <Route path="/posts/new">
          <PostForm setPosts={setPosts} />
        </Route>
        

      </Switch>
    </div>
  );
}

export default App;
