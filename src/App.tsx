import './App.css'
import { todos } from './data/todoList.json'
import { TodoList } from './components/TodoList'
function App() {
  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

export default App
