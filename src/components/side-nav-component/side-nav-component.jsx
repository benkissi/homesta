import React from 'react'

import { Wrapper, Logo, MenuContent } from './side-nav-styles'

const SideNav = (props) => {
    return (
        <Wrapper>
            <Logo>Logo</Logo>
            <MenuContent>
                {props.children}
            </MenuContent>
        </Wrapper>
    )
}

export default SideNav