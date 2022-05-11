import { useContext } from "react"
import styled from "styled-components"
import { StateContext } from "../context/StateContext"
import Button from "./Button"



const TodoItem:React.FC<TodoItemProps> = ({text, id, done}) => {


  const {dispatch} = useContext(StateContext)
  
  return (
    <StyledListItem>
    <span style={{textDecoration: done? "line-through" : null}} >{text}</span>

      <div>
        <Button text="&#10006;" color="danger" size="small" onClick={()=>dispatch({type:"ITEM_DELETE", payload:id})}/>
        <Button text="&#10003;" color="primary" size="small" onClick={()=>dispatch({type:"ITEM_DONE", payload:id})}/>
      </div>
      

    </StyledListItem>
  )
}

const StyledListItem = styled.li`
    margin: 0.5rem auto;
    background-color:  #3F3E41;
    border: 3px solid transparent;
    border-left-color: #F8EF12;
    padding: 1em;
    transition: 200ms;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    

    :hover{
      //transform: scale(1.1);
      border: 3px solid #F8EF12;
    }
`

export default TodoItem