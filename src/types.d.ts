//styles props type
type ButtonProps = { //button component props
    text: string,
    color?: string,
    size?: string,
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
}

interface StyledButtonProps { //styled button component props
    color?: string,
    size?: string
}
//-------------------------------

//todo items type
type TodoItemProps = { //props for the TodoItem component
    text: string,
    done: boolean,
    id: number
}

type TodoType = { //types for todo object
    text: string,
    id: number,
    done: boolean
}

type InitialStateType = { //value types for the state context
    todos: TodoType[],
}

//-------------------------------
