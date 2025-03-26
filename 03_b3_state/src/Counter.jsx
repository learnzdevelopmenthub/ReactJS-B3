import { useState } from 'react'

const counter = () => {
    console.log("Count Component")

    const [ count, setCount ] = useState(0);

    const increment = () => {
      setCount( prevCount => prevCount + 1 )
      setCount( prevCount => prevCount + 1 )
    }

    return(
        <div>
            <h2>Count:{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default  counter