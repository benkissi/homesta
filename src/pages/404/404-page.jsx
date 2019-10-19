import React from 'react'

import Button from '../../components/button-component/button-component'

import { Wrapper, Image, Info } from './404-page-styles'

const PageNotFound = () => {
    return (
        <Wrapper>
            <Image src="https://i.imgur.com/qIufhof.png" />
            <Info>
                <h3>This page could not be found</h3>
                <Button text="Go Home" bgColor="#69eed3" />
                <p>support@homesta.com</p>
            </Info>
        </Wrapper >
    )
}

export default PageNotFound