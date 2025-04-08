import { useEffect, useState } from "react"
import axios from "axios"

const PostView = () => {
    const [postId, setPostId] = useState(1)
    const [ post, setPost ] = useState({})


    useEffect(()=>{
        // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        // .then( response => response.json())
        // .then( data => {
        //     setPost(data)
        // })

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then( response => { 
            setPost(response.data)
        })
    }, [postId])

    return(
        <>
            <h1>Post</h1>
            <h2>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => setPostId(postId + 1)}>Next</button>
        </>
    )
}

export default PostView