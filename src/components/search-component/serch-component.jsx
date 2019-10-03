import React from 'react'

import Input from '../Input-component/input-component'
import DataList from '../datalist-component/datalist-component'
import RadioInput from '../radio-component/radio-component'

import { Wrapper } from './search-styles'

const Search = () => {
    return (
        <Wrapper>
            <RadioInput />
            <DataList placeholder="Type" width="200" />
            <Input placeholder="Location" />
            <DataList placeholder="Rent period" width="200" />
        </Wrapper>
    )
}

export default Search