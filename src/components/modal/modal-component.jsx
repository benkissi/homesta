import React from 'react'

import * as ModalStyles from './modal-styles'


const Modal = (props) => {
    const handleToggle = (e) => {
        if (e.target.classList.contains('modal')) {
            props.toggle()
        }

    }

    return (
        <ModalStyles.Wrapper onClick={handleToggle} open={props.open} id="myModal" className="modal">

            <ModalStyles.Content className="modal-content">
                {props.content}
            </ModalStyles.Content>

        </ModalStyles.Wrapper >
    )
}

export default Modal