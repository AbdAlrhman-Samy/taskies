import { useContext } from "react"
import styled from "styled-components"
import { AddTodo } from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import {StateContext} from "./context/StateContext"


export default function App() {

  const {state} = useContext(StateContext)
    
  return (
    <Container>
      <AddTodo />

      {state.todos.length ? (
        <ul style={{ listStyle: "none", width: "100%", padding: "5% 20%" }}>
          {state.todos.map((todo: TodoType) => (
            <TodoItem text={todo.text} id={todo.id} done={todo.done} key={todo.id} />
          ))}
        </ul>
      ) : (
        <h1>¯\_(ツ)_/¯</h1>
      )}
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  width: 75vw;
  margin: auto;
`