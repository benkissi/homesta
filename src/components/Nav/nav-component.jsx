import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Modal from '../modal/modal-component'


import * as NavStyles from './nav-styles'


const Nav = () => {
    const [isOpen, setModalState] = useState(false)

    const toggleModal = () => {
        setModalState(!isOpen)
    }

    const handleScroll = (to) => {
        const elemnt = document.getElementById(to)
        if (elemnt)
            elemnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const content = (
        <NavStyles.MobileList>
            <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => handleScroll('home')}>Home</NavStyles.Menu></NavStyles.MenuItem>
            <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => handleScroll('about-me')}>About me</NavStyles.Menu></NavStyles.MenuItem>
            <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => handleScroll('portfolio')}>Projects</NavStyles.Menu></NavStyles.MenuItem>
            <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => handleScroll('articles')}>Blog</NavStyles.Menu></NavStyles.MenuItem>
            <NavStyles.MenuItem><NavStyles.Menu to='/sign-up'>Sign Up</NavStyles.Menu></NavStyles.MenuItem>
        </NavStyles.MobileList>
    )

    return (
        <NavStyles.Wrapper>
            <NavStyles.Logo><img src="../../img/logo.png" /></NavStyles.Logo>
            <FontAwesomeIcon onClick={toggleModal} id="menu-icon" icon={faBars} size='3x' />
            <NavStyles.MenuList>
                <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => handleScroll('home')}>Home</NavStyles.Menu></NavStyles.MenuItem>
                <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => handleScroll('about-me')}>About me</NavStyles.Menu></NavStyles.MenuItem>
                <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => handleScroll('portfolio')}>Projects</NavStyles.Menu></NavStyles.MenuItem>
                <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => handleScroll('articles')}>Blog</NavStyles.Menu></NavStyles.MenuItem>
                <NavStyles.MenuItem><NavStyles.Menu to='/sign-up'>Sign Up</NavStyles.Menu></NavStyles.MenuItem>
            </NavStyles.MenuList>

            {/* <NavStyles.MobileMenu>
                <NavStyles.Menu to='/'>Home</NavStyles.Menu>
            </NavStyles.MobileMenu> */}
            <Modal toggle={toggleModal} open={isOpen} content={content} />
        </NavStyles.Wrapper>
    )
}

export default Nav