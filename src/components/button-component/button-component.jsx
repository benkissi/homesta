import React from 'react'

import { ButtonStyle } from './button-styles'


const Button = (props) => {
    return (
        < ButtonStyle {...props}>{props.text}</ ButtonStyle>
    )
}

export default Button