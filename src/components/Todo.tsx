import { Todo as TodoType } from "../types/types"

type Props = TodoType
export const Todo: React.FC<Props> = ({content}) => {
    return (
      <>
      <li>
        {content}
      </li>
      </>
    )
  }