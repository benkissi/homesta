import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShower, faBed, faMapMarkerAlt, faDollarSign, faRedoAlt, faEye, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import { truncateString } from '../../utils/utility-methods'

import { Wrapper, Details, SubDetails, Title, Desc, Price, Image } from './card-styles'


const Card = (props) => {

    return (
        <Wrapper onClick={props.click} width={props.width} className="card">
            <Image image={props.image}>
            </Image>
            <Details>
                <Title>
                    <h3>{props.title}</h3>
                </Title>
                <Desc>
                    <p>
                        {truncateString(props.description, 150)}
                    </p>
                </Desc>
                {
                    props.price ? <Price><FontAwesomeIcon icon={faDollarSign} color="#69eed3" />: {props.price}</Price> : ''
                }
                <SubDetails >
                    <div><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee6984" /> :{props.location}</div>
                    <div><FontAwesomeIcon icon={faBed} color="#ee6984" /> :{props.rooms}</div>

                </SubDetails>
                <SubDetails >
                    <div><FontAwesomeIcon icon={faShower} color="#ee6984" /> :{props.baths}</div>
                    <div><FontAwesomeIcon icon={faRedoAlt} color="#ee6984" /> :{props.type}</div>

                </SubDetails>
                {
                    props.views ?
                        <SubDetails >
                            <div><FontAwesomeIcon icon={faEye} color="#ee6984" /> :{props.views}</div>
                            <div><FontAwesomeIcon icon={faPhoneAlt} color="#ee6984" /> :{props.phone}</div>
                        </SubDetails>
                        : ''
                }
            </Details>
        </Wrapper >
    )
}

export default Card