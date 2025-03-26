import { useState } from "react";

const User = () => {

    const [user, setUser] = useState({name: 'Raja', age: 25})

    const updateName = () => {
        setUser({...user, name: "Priya"})
    }

    return(
        <div>
            <h2>User</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={updateName}>Update Name</button>
        </div>
    )
}

export default User;