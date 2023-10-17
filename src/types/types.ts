export interface Todo {
    id: number
    content: string
    completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoContent = Pick<Todo, 'content'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodo = Todo[]