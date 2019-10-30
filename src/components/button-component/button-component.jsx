import React from 'react'

import { ButtonStyle, Wrapper } from './button-styles'


const Button = (props) => {
    return (
        <Wrapper margin={props.margin}>
            < ButtonStyle {...props}>{props.text}</ ButtonStyle>
        </Wrapper>

    )
}

export default Button