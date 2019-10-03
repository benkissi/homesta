import React from 'react'

import { Wrapper, Input, Label } from './radio.styles'

const RadioInput = (props) => {
    return (
        <Wrapper>
            <Label class="radio">
                <Input type="radio" name="r" value="1" checked />
                <span>For Rent</span>
            </Label>
            <Label class="radio">
                <Input type="radio" name="r" value="2" />
                <span>For Sale</span>
            </Label>
        </Wrapper>
    )
}

export default RadioInput