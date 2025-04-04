import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from './redux/userSlice'

const UserList = () => {
    const users  = useSelector( state => state.users )
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }

    return(
        <div>
            { users.map( user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>    
    )
}

export default UserList;