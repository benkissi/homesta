import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    background: ${props => props.background === "solid" ? "#1f1f20" : "none"};
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-weight: ${props => props.background === "solid" ? "normal" : "bold"};
    padding-top: 10px;
    position: fixed;
    top: 0;
    z-index:5;

    #menu-icon {
        display: none;
    }

    @media (max-width: 800px) {
        #menu-icon {
            display: inline-block;
            margin-right: 0px;
            color: white;
            margin-right: 10px;

            :hover {
                cursor: pointer;
            }
        }
    }
`

export const Menu = styled(Link)`
    text-decoration: none;
    color: white;
    :hover {
        color: #8490ff;
    }
    @media(max-width: 800px) {
        color: #8490ff;
    }
`

export const MenuList = styled.div`
    list-style: none;
    margin-top: 0;
    display: flex;
    padding: 10px;

    @media (max-width: 800px) {
        display: none;
    }
`

export const MobileList = styled.div`
    list-style: none;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    display: flex;
    padding: 10px;
    border: 1px solid #888;
`

export const MenuItem = styled.div`
    margin-left: 50px;
    :last-child {
        margin-right: 10px;
    }

    @media (max-width: 800px) {
        margin-left: 0px;
        margin-bottom:20px;
        :last-child {
            margin-right: 0px;
        }
        font-size:50px;
    }
`

export const Logo = styled.div`
    color: white;
    width: 50px;
    margin-left: 10px;
    position: relative;

    img {
        width: 100%;
    }
`

export const MobileMenu = styled.div`

`

export const Right = styled.div`
    display: flex;
`