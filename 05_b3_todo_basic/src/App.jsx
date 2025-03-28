import './App.css'
import { useState } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App() {

  const [ todos, setTodos] = useState([
    {id: 1, text: 'Learn React'},
    {id: 2, text: 'Read Documentation'}
  ])

  // 2. state for update search key 

  // this function used to add new object based on input text coming from AddTodo Component
  const appendTodo = (text) => {
    setTodos( prevTodos => [...prevTodos, {id: Date.now(), text: text}])
  }

  // this function filters and set Todos based on id received from TodoList component for delete
  const deleteTodo = (id) => {
    setTodos(todos.filter( item => item.id != id ))
  }

  // 3. function for filter todos by search key
  // const searchedTodos = filter

  return (
    <>
      <h1>Todo App </h1>
      {/* 1. create input for search */}
      <AddTodo appendTodo={appendTodo}/>
      
      {/* 4. instead of todos, pass searched Todos */}
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
