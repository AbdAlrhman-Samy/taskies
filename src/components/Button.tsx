import styled from "styled-components"

//component
import React from 'react'

const Button:React.FC<ButtonProps> = ({text, size, color, onClick}) => {
  return (
    <StyledButton size={size} color={color} onClick={onClick} >
        {text}
    </StyledButton>
  )
}

//style
const colorHandler = (color?: string | undefined) => {
    switch (color) {
        case "primary":
            return "#F8EF12"
        case "secondary":
            return "#A5AC8C"
        case "danger":
            return "#9a3f3f"
        default:
            return "white"
    } ;
}

const fontSizeHandler = (size?: string | undefined) => {

    switch (size) {
        case "small":
            return "0.5em"   
        case "big":
            return "1em"    
        default:
            return "0.75em"    
    }
}

const StyledButton = styled.button<StyledButtonProps>`
    cursor: pointer;
    text-transform: uppercase;
    border: 2px solid ${({color}) => colorHandler(color)};
    margin: 1em;
    padding: 0.5em 1em;
    font-size: ${({size}) => fontSizeHandler(size)};
    max-width: max-content;
    transition: 250ms;
    color: ${props => colorHandler(props.color)};
    font-weight: 600;

    :hover{
        background-color: ${props => colorHandler(props.color)};
        color: #1F1F23;
    }
    :active{
        transform: scale(0.95);
    }

`


export default Button