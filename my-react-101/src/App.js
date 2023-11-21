import TodoList from "./TodoList";
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'

function App() {

  const LOCAL_STORAGE_KEY = "todoApp.todos"

  // use object destructuring to assign state
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))||[])
  const todoNameRef = useRef()

  // any time todos array changes, callback the useEffect
  // to store the todos list in the local storage
  useEffect( () => {
    localStorage.setItem (LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find( todo => todo.id === id )
    // toggle the completed field
    todo.complete = !todo.complete
    setTodos(newTodos)
  }


  // define handler for Add Todo button
  function handleAddTodos(e) {
    const name = todoNameRef.current.value
    if (name === "") return
    // set the todos using the state handler
    setTodos ( prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
  }

   function handleClearTodos() {
    const newTodos = todos.filter( todo => !todo.complete)
    setTodos(newTodos)
   }


  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodos}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter( todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
