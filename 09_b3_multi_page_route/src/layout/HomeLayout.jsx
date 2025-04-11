import { Link, Outlet } from "react-router-dom"

const HomeLayout = () => {
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/dashboad">About</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default HomeLayout