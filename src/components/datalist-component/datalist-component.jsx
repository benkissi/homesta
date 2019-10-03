import React from 'react'

import Input from '../Input-component/input-component'


const DataList = (props) => {
    return (
        <div>
            <Input type="text" list="data" width={props.width} placeholder={props.placeholder} />

            <datalist id="data">
                <option value="House" />
                <option value="Apartment" />
                <option value="Town house" />
            </datalist>
        </div>
    )
}

export default DataList