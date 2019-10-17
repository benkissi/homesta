import React from 'react'

import { Wrapper } from './username-icon-styles'

const UsernameIcon = props => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    )
}

export default UsernameIcon