import {useState, useEffect} from 'react'

const PostForm = ({authors, setPosts, setError}) => {
    const [newPost, setNewPost] = useState({
        summary: "",
        category: "",
        title: "",
        content: "",
        author_id: ""
    })

    const handleChange = ({target: {name, value}}) => {
        setNewPost(currentPost => ({
            ...currentPost,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }).then(res => {
            if (res.status === 201) {
                res.json().then(postFromBackend => {
                    setPosts(currentPosts => [postFromBackend, ...currentPosts])
                })
            } else {
                res.json().then(messageObj => {
                    debugger
                    const oneStringErrors = Object.entries(messageObj.error).map(errArray => `${errArray[0]}: ${errArray[1]}`).join(". ")
                    // setError({text: })
                })
            }
        })
        .catch(err => alert(err))
    }
    // else {
    //     re.json().then(data => {
    //        setErrors(Object.entries(data.errors)).map(err => `${err[0]} : ${err[1]}`))
    //      })
    //     }
    //    })
    //  }
     
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type="text" name="title" value={newPost.title} onChange={handleChange}/>
            <label htmlFor='author'>Author</label>
            <select name="author_id" onChange={handleChange} value={newPost.author_id}>
                <option value="">Select an Author</option>
                {authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
            </select>
            <label htmlFor='category'>Category</label>
            <select name="category" onChange={handleChange} value={newPost.category}>
                <option value="">Select a Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non Fiction</option>
            </select>
            <label htmlFor='content'>Content</label>
            <input type="text" name="content" value={newPost.content} onChange={handleChange}/>
            <label htmlFor='summary'>Summary</label>
            <input type="text" name="summary" value={newPost.summary} onChange={handleChange}/>
            <input type="submit" value="create"/>
        </form>
    </div>
  )
}

export default PostForm