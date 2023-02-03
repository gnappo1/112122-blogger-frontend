import React from 'react'
import Post from "./Post"

const PostList = ({posts}) => {
    const mappedPosts = posts.map(post => <Post {...post} key={post.id} />)

    return (
        <div>{mappedPosts}</div>
    )
}

export default PostList