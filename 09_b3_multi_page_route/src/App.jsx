import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Dashboard from './pages/Dashboard'
import HomeLayout from './layout/HomeLayout'

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
          
          
          
          <Route path='/users/:id' element={<User/>}/>
      </Routes>
    </>
  )
}

export default App
