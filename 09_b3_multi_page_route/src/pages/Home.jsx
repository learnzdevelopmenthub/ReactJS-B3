import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/dashboard')
    }

    return(
        <>
            <h1>Home Page</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}   

export default Home