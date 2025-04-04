import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addUser } from './redux/userSlice'

const UserForm = () => {
    const [ user, setUser ] = useState({name: "", email: ""})

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(addUser({id: Date.now(), ...user}))
        setUser({name: "", email: ""})
    }

    return(
        <div>
            <h1>Add User</h1>
            <input 
                type="text"
                placeholder='Name'
                onChange={ e => setUser({...user, name: e.target.value})}
                value={user.name}
            />
            <input 
                type="text" 
                placeholder='Email'
                onChange={ e => setUser({...user, email: e.target.value})}
                value={user.email}
            />
            <button onClick={handleSubmit}>Add User</button>
        </div>
    )
}

export default UserForm;