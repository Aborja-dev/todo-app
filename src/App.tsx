import './App.css'
import { ListOfTodo } from './types/types'
import { todos } from './data/todoList.json'
import { TodoList } from './components/TodoList'
function App() {
  return (
    <>
      <TodoList />
    </>
  )
}

export default App
