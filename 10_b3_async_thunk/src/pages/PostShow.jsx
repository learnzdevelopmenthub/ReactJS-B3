import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../redux/postSlice";
import Loading from "../components/common/Loading";

const PostShow = () => {
    const { id } = useParams()
    const { post, postStatus, postError } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost(id))
    }, [])

    return(
        <>
            <h3>Post</h3>
            { postStatus === 'loading' && <Loading />}
            { postStatus === 'succeeded' && (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
        </>

    )
}

export default PostShow;