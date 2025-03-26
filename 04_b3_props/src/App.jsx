import './App.css'
import Welcome from './Welcome'
import Click from './Click'
import Cart from './Cart'
import Product from './Product'
import { useState } from 'react'

function App() {

  const products = ["Apple", "Samsung", "MI"]
  const [ cart, setCart] = useState([])

  const handleClick = (a) => {
    alert(`${a} Button Clicked!`)
  }

  const addToCart = (item) => {
    setCart( prevCart => [...prevCart, item])
  }

  return (
    <>
     <h1>Props</h1>
     <Welcome name="Raja" age={25} list={["hello", "hai"]}/>
     <Click handleClick={handleClick} />

     <Cart cart={cart}></Cart>
     <Product products={products} addToCart={addToCart}></Product>
    </>
  )
}

export default App
