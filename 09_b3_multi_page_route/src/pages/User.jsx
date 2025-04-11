import { useParams } from "react-router-dom"

const User = () => {
    const { id } = useParams()

    return(
        <>
            <h1>User Page</h1>
            <p>{id}</p>
        </>
    )
}   

export default User