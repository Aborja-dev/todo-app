import { ListOfTodo } from "../types/types"
import { Todo } from "./Todo"

interface Props {
 todos: ListOfTodo   
}
export const TodoList: React.FC<Props> = ({todos}) => {
    return (
      <>
        <ul>
          {
            todos.map(t=><Todo key={t.id} id={t.id} completed={t.completed} content={t.content} />)
          }
        </ul>
      </>
    )
  }