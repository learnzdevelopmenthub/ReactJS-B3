import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count = useSelector( state => state.count )
  console.log(count)
  const dispatch = useDispatch()

  const incrementCount = () => {
    dispatch({type: 'INCREMENT', payload: 5})
  }

  return (
    <>
      <h1>Redux Counter: {count.current_count} </h1>
      <button onClick={incrementCount}>Increment</button>
    </>
  )
}

export default App
