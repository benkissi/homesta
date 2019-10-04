import React from 'react'

import { SectionWrapper } from './section-styles'

const Section = (props) => (
    <SectionWrapper setHeight={props.setHeight} fontColor={props.fontColor} bgColor={props.backgroundColor}>
        {props.header ? <div>
            <h2>{props.title}</h2>
            <hr />
        </div> : ''}
        <div>
            <p>{props.subTitle}</p>
        </div>

        {props.children}
    </SectionWrapper>
)

export default Section