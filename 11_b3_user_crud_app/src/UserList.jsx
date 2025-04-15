import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./redux/features/userSlice"

const UserList = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector( state => state.users )

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return( 
        <div>
            <h2>User List</h2>
            <ul className="list-group">
                { list.map( user => (
                    <li key={user.id} className="list-group-item">{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList