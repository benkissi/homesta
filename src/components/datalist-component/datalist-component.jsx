import React from 'react'

import Input from '../Input-component/input-component'


const DataList = (props) => {
    return (
        <div>
            <Input type="text" list={props.uid} width={props.width} placeholder={props.placeholder} />

            <datalist id={props.uid}>
                {props.data ? props.data.map(item =>
                    <option key={item.index} value={item} />
                ) : ""}
            </datalist>
        </div>
    )
}

export default DataList