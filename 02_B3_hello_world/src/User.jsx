
const User = () => {

    const isLoggedIn = true

    return(
        <>
            <h1>User Profile</h1>
            {/* {isLoggedIn ? (
                <button>Logout</button>
            ) : (
                <button>Login</button>
            )} */}

            { isLoggedIn && <button>Logout</button> }
            { !isLoggedIn && <button>Login</button> }

            {isLoggedIn && <p>Welcome back</p>}
        </>
    )
}

export default User;