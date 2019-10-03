import React from 'react'
import { Wrapper, Details, SubDetails } from './card-styles'

const Card = (props) => {
    return (
        <Wrapper width={props.width} className="card">
            <div className="card-image">
                <img src={props.image} />
            </div>
            <Details>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div>
                    <p>
                        {props.description}
                    </p>
                </div>
                <SubDetails >
                    <div><p>Location: {props.location}</p></div>
                    <div><p>Price: {props.price}</p></div>
                </SubDetails>
            </Details>
        </Wrapper>
    )
}

export default Card