import logo from './logo.svg';
import './App.css';
import PostForm from "./components/PostForm"
import PostList from './components/PostList'
import {useState, useEffect, useContext} from "react"
import {Route, Switch} from "react-router-dom"
import Notification from './components/Notification';
import { AuthorContext } from './context/authorContext';

function App() {

  // const [authors, setAuthors] = useState([]);
  // const {getAuthors} = useContext(AuthorContext)
  // const [posts, setPosts] = useState([]);
  const [error, setError] = useState({text: "", type: ""})
  
  // useEffect(() => {
  //   getAuthors()
  // }, [getAuthors]);

  

  return (
    <div className="App">
      <Notification error={error} setError={setError} />
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <PostList />
        </Route>
        <Route path="/posts/new">
          <PostForm setError={setError}/>
        </Route>
        

      </Switch>
    </div>
  );
}

export default App;
