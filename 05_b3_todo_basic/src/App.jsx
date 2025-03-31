import './App.css'
import { useState, useCallback, useMemo } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App() {
  console.log("App Rendering..")

  const [ todos, setTodos] = useState([
    {id: 1, text: 'Learn React'},
    {id: 2, text: 'Read Documentation'}
  ])

  // 2. state for update search key 
  const [searchTerm, setSearchTerm] = useState('')

  // this function used to add new object based on input text coming from AddTodo Component
  const appendTodo = useCallback((text) => {
    setTodos( prevTodos => [...prevTodos, {id: Date.now(), text: text}])
  }, [])


  // this function filters and set Todos based on id received from TodoList component for delete
  const deleteTodo = useCallback((id) => {
    setTodos(todos.filter( item => item.id != id ))
  }, [])

  // 3. function for filter todos by search key
  // const searchedTodos = filter
  const filteredTodos = useMemo(() => { 
      return todos.filter( item => item.text.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [todos, searchTerm])

  return (
    <>
      <h1>Todo App </h1>
      
      <AddTodo appendTodo={appendTodo}/> <br />

      {/* 1. create input for search */}
      <input 
        type="text"
        placeholder='Search tasks'
        onChange={e => setSearchTerm(e.target.value)}
       />

      
      {/* 4. instead of todos, pass searched Todos */}
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
