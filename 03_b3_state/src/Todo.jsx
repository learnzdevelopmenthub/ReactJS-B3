import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState(['Learn React', 'Read Documentation']) 

    const addTodo = () => {
        setTodos([...todos, "Develop Project"])
    }
    
    return(
        <div>
            <h2>Todo</h2>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default Todo;