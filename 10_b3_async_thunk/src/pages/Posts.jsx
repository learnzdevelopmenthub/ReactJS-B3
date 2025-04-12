import { useSelector, useDispatch } from "react-redux"
import { fetchPosts } from "../redux/postSlice"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Loading from "../components/common/Loading"

const Posts = () => {
    const { posts, status, error } = useSelector( state => state.posts )
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [])
    
    return(
        <>
            <h2>Posts</h2>
            {status === 'loading' && <Loading />}
            {status === 'succeeded' && (
                posts.map( item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <Link to={`/posts/${item.id}`}>View Post</Link>
                    </div>
                ))
            )}
        </>
    )
}

export default Posts