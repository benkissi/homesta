import React from 'react'

import { Wrapper, Input, Label } from './checkbox-styles'

const Checkbox = (props) => {
    return (
        <Wrapper>
            <Label className="radio">
                <Input type="checkbox" />
                <span>For rent by owner</span>
            </Label>
        </Wrapper>
    )
}

export default Checkbox