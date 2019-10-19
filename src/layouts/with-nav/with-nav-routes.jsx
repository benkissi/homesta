import React from 'react'
import { Route } from 'react-router-dom'

import WithNavLayout from './with-nav-layout'

const WithNavRoutes = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (
        <WithNavLayout>
            <Component {...props} />
        </WithNavLayout>
    )} />
}

export default WithNavRoutes