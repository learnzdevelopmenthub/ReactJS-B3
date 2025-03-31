import { useState, memo } from "react";

const AddTodo = memo(({appendTodo}) => {
    console.log("AddTodo Rendering..")

    const [text, setText] = useState("")

    const handleSubmit = () => {
        appendTodo(text)
        setText("")
    }

    return(
        <div>
            <input type="text" onChange={e => setText(e.target.value)} value={text}/>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
})

export default AddTodo;