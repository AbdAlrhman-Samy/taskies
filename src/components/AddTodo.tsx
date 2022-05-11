import { SyntheticEvent } from "react"
import styled from "styled-components"
import Button from "./Button"

export const AddTodo:React.FC = () => {

    const handleAdd = (e: SyntheticEvent) =>{
        e.preventDefault()
        console.log("hey");
    }

  return (
    <StyledForm onSubmit={handleAdd}>
        <StyleTextInput minLength={10}/>
        <Button text="add" size="big" color="primary" />
    </StyledForm>
  )
}


const StyleTextInput = styled.input.attrs(props=> ({
    type: "text"
}))`
    background-color: transparent;
    height: 1.8em;
    padding: 1em;
    border: 3px solid #3F3E41;
    transition: 250ms;
    width: 80%;
    :focus{
        background-color: #3F3E41;
        border: 3px solid #F8EF12;
    }
`

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`