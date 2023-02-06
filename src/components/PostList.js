import {useContext} from 'react'
import Post from "./Post"
import { PostContext } from '../context/postContext'

const PostList = () => {
    const {posts} = useContext(PostContext)
    const mappedPosts = posts.map(post => <Post {...post} key={post.id} />)

    return (
        <div>{mappedPosts}</div>
    )
}

export default PostList