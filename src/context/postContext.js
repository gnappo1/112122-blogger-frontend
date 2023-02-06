import {useState, useEffect, createContext} from 'react'

const PostContext = createContext()

const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(setPosts)
        .catch(err => alert(err))
      }, []);
    return (
        <PostContext.Provider value={{posts, setPosts}}>
            {children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}