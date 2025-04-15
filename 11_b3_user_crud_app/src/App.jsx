import './App.css'
import UserList from './UserList'
import UserForm from './UserForm'

function App() {
  return (
    <div className='container mt-4'>
      <h1>USER CRUD APP</h1>
      <UserForm />
      <UserList />
    </div>
  )
}

export default App
