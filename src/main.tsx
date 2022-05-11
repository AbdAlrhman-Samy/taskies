import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createGlobalStyle} from "styled-components"
import { StateProvider } from './context/StateContext'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    font-size: 16px;
    box-sizing: border-box;
    background-color: #1F1F23;
    color:  white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StateProvider>
      <GlobalStyle/>
      <App />
    </StateProvider>
)
