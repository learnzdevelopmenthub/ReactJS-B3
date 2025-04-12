import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import PostShow from './pages/PostShow'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts/:id' element={<PostShow />} />
      </Routes>
    </>
  )
}

export default App
