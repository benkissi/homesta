import React from 'react'

import { Wrapper, Textarea } from './text-area-styles'


const TextArea = ({ width, ...rest }) => {
    return (
        <Wrapper width={width}>
            <Textarea {...rest}>

            </Textarea>
        </Wrapper>
    )
}

export default TextArea 