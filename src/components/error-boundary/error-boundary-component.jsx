import React from 'react'

import { Wrapper, Image, Info } from './error-boundary-styles'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <Wrapper>
                    <Image src="https://i.imgur.com/yW2W9SC.png" />
                    <Info>
                        <h3>Something broke</h3>
                        <p>If this persist, please contact support</p>
                        <p>support@homesta.com</p>
                    </Info>
                </Wrapper>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary