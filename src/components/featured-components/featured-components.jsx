import React from 'react'

import Card from '../card-component/card-component'

import { Wrapper } from './featured-styles'

import { featuredListings } from '../../utils/data'
import { getObjectArray } from '../../utils/utility-methods'

const Featured = () => {
    const listings = getObjectArray(featuredListings)
    const cardSize = '30%'
    return (
        <Wrapper>
            {
                listings.map(property => (
                    <Card
                        key={property.id}
                        image={property.img}
                        title={property.title}
                        description={property.description}
                        location={property.location}
                        price={property.price}
                        width={cardSize}
                    />
                ))
            }
        </Wrapper>
    )
}

export default Featured