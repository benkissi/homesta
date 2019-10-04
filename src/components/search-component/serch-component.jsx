import React from 'react'

import Input from '../Input-component/input-component'
import DataList from '../datalist-component/datalist-component'
import RadioInput from '../radio-component/radio-component'
import Checkbox from '../checkbox-component/checkbox-component'
import Button from '../button-component/button-component'

import { Wrapper, SearchControls } from './search-styles'

import { propertyTypes, rentPeriods, baths, rooms, sorting } from '../../utils/data'

const Search = () => {
    return (
        <Wrapper>
            <SearchControls>
                <RadioInput />
                <DataList uid="propertyTypes" data={propertyTypes} placeholder="Type" width="200" />
                <Input placeholder="Location" />
                <DataList uid="rentPeriods" data={rentPeriods} placeholder="Rent period" width="200" />
            </SearchControls>

            <SearchControls>
                <DataList uid="baths" data={baths} placeholder="Baths" width="200" />
                <Input placeholder="GHC - Min Price" type="number" width="200" />
                <Input placeholder="GHC - Max Price" type="number" width="200" />
                <DataList uid="rooms" data={rooms} placeholder="Bed Rooms" width="200" />
            </SearchControls>
            <SearchControls>
                <Checkbox />
                <DataList uid="sorting" data={sorting} placeholder="Newest-to-oldest" width="200" />
                <Checkbox />
            </SearchControls>
            <SearchControls>
                <Button text="Find" />
            </SearchControls>
        </Wrapper>
    )
}

export default Search