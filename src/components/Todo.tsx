interface Props {
    id
    content
    completed
}
export const Todo: React.FC<Props> = ({todo}) => {
    return (
      <>
      <li>
        {todo.content}
      </li>
      </>
    )
  }