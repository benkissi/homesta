import React from 'react'

import Nav from '../../components/Nav/nav-component'

const WithNavLayout = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

export default WithNavLayout