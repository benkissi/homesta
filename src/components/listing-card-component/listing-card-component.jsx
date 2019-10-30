import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShower, faBed } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, ImageWrapper, Image, Content, Details, Insights } from './listing-card-styles.js'

const ListingCard = (props) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src='../../img/home1.jpeg' />
            </ImageWrapper>
            <Content>
                <Details>
                    <h4>2 Bed room executive house</h4>
                    <p>hshshshsh hshs cddhbchdcdhcdhsjs hshshs</p>
                    <div>
                        <FontAwesomeIcon icon={faShower} color="#ee6984" />: 5
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBed} color="#ee6984" />: 5
                    </div>


                </Details>
                <Insights>

                </Insights>
            </Content>

        </Wrapper>
    )
}

export default ListingCard