import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { signOutStart } from '../../redux/user/user-actions'

import Modal from '../modal/modal-component'
import UsernameIcon from '../username-icon-component/username-icon-component'

import { getInitials } from '../../utils/utility-methods'
import * as NavStyles from './dashboard-nav-styles'


const DashboardNav = ({ currentUser, signOut }) => {
    const [isOpen, setModalState] = useState(false)

    const toggleModal = () => {
        setModalState(!isOpen)
    }

    const onMenuClick = (to) => {
        const elemnt = document.getElementById(to)
        if (elemnt)
            elemnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const content = (
        <NavStyles.MobileList>
            <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => onMenuClick('home')}>Home</NavStyles.Menu></NavStyles.MenuItem>
            <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => onMenuClick('about-me')}>About me</NavStyles.Menu></NavStyles.MenuItem>
            <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => onMenuClick('portfolio')}>Projects</NavStyles.Menu></NavStyles.MenuItem>
            <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => onMenuClick('articles')}>Blog</NavStyles.Menu></NavStyles.MenuItem>
            <NavStyles.MenuItem><NavStyles.Menu to='/sign-up'>Sign Up</NavStyles.Menu></NavStyles.MenuItem>
        </NavStyles.MobileList>
    )

    return (
        <NavStyles.Wrapper>
            <NavStyles.Logo><img src="../../img/logo.png" /></NavStyles.Logo>
            <NavStyles.Right>
                <NavStyles.MenuList>
                    <NavStyles.MenuItem>{currentUser ? <NavStyles.Menu onClick={signOut}>Sign Out</NavStyles.Menu> : <NavStyles.Menu to='/sign-up'>Sign Up</NavStyles.Menu>}</NavStyles.MenuItem>
                </NavStyles.MenuList>
                {
                    currentUser ? <UsernameIcon text={getInitials(currentUser.displayName)} /> : ""
                }

            </NavStyles.Right>
            <FontAwesomeIcon onClick={toggleModal} id="menu-icon" icon={faBars} size='3x' />

            {/* <NavStyles.MobileMenu>
                <NavStyles.Menu to='/'>Home</NavStyles.Menu>
            </NavStyles.MobileMenu> */}
            <Modal toggle={toggleModal} open={isOpen} content={content} />
        </NavStyles.Wrapper>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav)