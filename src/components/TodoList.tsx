import { ListOfTodo } from "../types/types"

interface Props {
 todos: ListOfTodo   
}
export const TodoList: React.FC<Props> = ({todos}) => {
    return (
      <>
        <ul>
          {
            todos.map(t=><Todo todo={t} />)
          }
        </ul>
      </>
    )
  }