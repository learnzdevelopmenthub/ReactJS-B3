import { useEffect, useState } from "react";

const SimpleEffect = () => {

    const [ count, setCount ] = useState(0)
    const [ color, setColor ] = useState("black")

    useEffect(() => {
        console.log("Component useEffect is working")
    }, [count])

    return(
        <>
            <div>Simple Effect Example</div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <div>{color}</div>
            <button onClick={() => setColor("white")}>Set Color</button>
        </>
        
    )
}

export default SimpleEffect;
