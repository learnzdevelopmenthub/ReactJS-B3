import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'

function App() {
  const count = useSelector( state => state.count )
  console.log(count)
  const dispatch = useDispatch()

  const incrementCount = () => {
    dispatch(increment(5))
  }

  const decrementCount = () => {
    dispatch(decrement())
  }

  return (
    <>
      <h1>Redux Counter: {count.current_count} </h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </>
  )
}

export default App
