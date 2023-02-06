import {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
import { AuthorContext } from '../context/authorContext'
import { PostContext } from '../context/postContext'
const PostForm = ({setError}) => {
    const history = useHistory()
    const {authors, setAuthors} = useContext(AuthorContext)
    const {setPosts} = useContext(PostContext)
    const [formErrors, setFormErrors] = useState({})

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
                    setError({text: "Post successfully created", type: "success"})
                    history.push("/")
                })
            } else {
                res.json().then(messageObj => {
                    if (typeof(messageObj.error) === 'string') {
                        setError({text: messageObj.error, type: "error"})
                    } else {

                        // const oneStringErrors = Object.entries(messageObj.error).map(errArray => `${errArray[0]}: ${errArray[1]}`).join(". ")
                        // debugger
                        setFormErrors(messageObj.error)
                    }
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
            <input type="text" name="title" value={newPost.title} onChange={handleChange}/><br />
            {formErrors.title ? <><span className='error'>{formErrors.title.join(". ")}</span><br /></> : null}
            <label htmlFor='author'>Author</label>
            <select name="author_id" onChange={handleChange} value={newPost.author_id}>
                <option value="">Select an Author</option>
                {authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
            </select><br />
            {formErrors.author_id ? <><span className='error'>{formErrors.author_id.join(". ")}</span><br /></> : null}
            <label htmlFor='category'>Category</label>
            <select name="category" onChange={handleChange} value={newPost.category}>
                <option value="">Select a Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non Fiction</option>
            </select><br />
            {formErrors.category ? <><span className='error'>{formErrors.category.join(". ")}</span><br /></> : null}
            <label htmlFor='content'>Content</label>
            <input type="text" name="content" value={newPost.content} onChange={handleChange}/><br />
            {formErrors.content ? <><span className='error'>{formErrors.content.join(". ")}</span><br /></> : null}
            <label htmlFor='summary'>Summary</label>
            <input type="text" name="summary" value={newPost.summary} onChange={handleChange}/><br />
            {formErrors.summary ? <><span className='error'>{formErrors.summary.join(". ")}</span><br /></> : null}
            <input type="submit" value="create"/>
        </form>
    </div>
  )
}

export default PostForm