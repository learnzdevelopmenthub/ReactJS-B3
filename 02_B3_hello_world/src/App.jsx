import './App.css'
import Greetings from './Greetings'
import User from './User'
import Users from './Users'

function App() {
  console.log("app component.")
  return (
    <>
      <h1>Main Component</h1>
      <Greetings />
      <User />
      <Users/>
    </>
  )
}

export default App
