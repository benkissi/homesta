import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { signOutStart } from '../../redux/user/user-actions'

import Modal from '../modal/modal-component'
import * as NavStyles from './nav-styles'


const Nav = ({ currentUser, signOut }) => {
    const [isOpen, setModalState] = useState(false)
    const [navBg, setNavBg] = useState("transparent")

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false)
    })

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [])

    const toggleModal = () => {
        setModalState(!isOpen)
    }

    const onMenuClick = (to) => {
        const elemnt = document.getElementById(to)
        if (elemnt)
            elemnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        const winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )
        const trackLength = documentHeight - winheight
        const percentageScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        if (percentageScrolled > 24) {
            setNavBg("solid")
        } else {
            setNavBg("transparent")
        }
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
        <NavStyles.Wrapper background={navBg}>
            <NavStyles.Logo><img src="../../img/logo.png" /></NavStyles.Logo>
            <NavStyles.Right>
                <NavStyles.MenuList>
                    <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => onMenuClick('home')}>Home</NavStyles.Menu></NavStyles.MenuItem>
                    <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => onMenuClick('about-me')}>About me</NavStyles.Menu></NavStyles.MenuItem>
                    <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => onMenuClick('portfolio')}>Projects</NavStyles.Menu></NavStyles.MenuItem>
                    <NavStyles.MenuItem><NavStyles.Menu to='/' onClick={() => onMenuClick('articles')}>Blog</NavStyles.Menu></NavStyles.MenuItem>
                    <NavStyles.MenuItem>{currentUser ? <NavStyles.Menu to="#" onClick={signOut}>Sign Out</NavStyles.Menu> : <NavStyles.Menu to='/sign-up'>Sign Up</NavStyles.Menu>}</NavStyles.MenuItem>

                </NavStyles.MenuList>

            </NavStyles.Right>
            <FontAwesomeIcon onClick={toggleModal} id="menu-icon" icon={faBars} size='3x' />
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav)