import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    ul {
        padding: 0;
        list-style-type: none;

        > * {
            margin-bottom: 30px;
        }
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 6%;
    padding-left: 18%;
    padding-right: 1%;
`
export const Top = styled.div`
    display: flex;
    height: auto;
    
`
export const Bottom = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Side = styled.div`
    
`