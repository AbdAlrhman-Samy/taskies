import React, { createContext, useReducer } from "react"

let InitialState = {
  todos: [
    {
      text: "Try Adding A New Task",
      done: false,
      id:1
    },
    {
      text: "Then Remove On Of The Tasks",
      done: false,
      id:2
    },
    {
      text: "HAVE F U N",
      done: false,
      id:3
    },
  ] 
}

  function reducer(state: InitialStateType, action: {type:String, payload:any}) {
    switch (action.type) {
      case "ITEM_DONE":
        
        let newState = state.todos.filter(todo=>{
          if(todo.id === action.payload) todo.done = !todo.done
          return todo
        })

        return {todos: newState};

      case "ITEM_DELETE":
        let filteredState = state.todos.filter(todo=> todo.id !== action.payload)
        
        return {todos: filteredState};

      default:
        state;
    }
  }

export const StateContext = createContext<{state: InitialStateType; dispatch: React.Dispatch<any>}>({state:InitialState, dispatch: ()=> null})

export const StateProvider = ({children}:{children:any}) => {


  const [state, dispatch] = useReducer(reducer, InitialState)


  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )
}
