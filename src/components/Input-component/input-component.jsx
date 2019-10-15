import React from 'react'

import { InputField, Wrapper } from './input-styles'


const Input = (props) => {
    return (
        <Wrapper width={props.width}>
            <InputField {...props} />
        </Wrapper>

    )
}

export default Input