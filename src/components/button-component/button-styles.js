import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    height: fit-content !important;
    position: relative;
    margin-bottom: ${props => props.margin ? props.margin : '20px'};
    margin-top: ${props => props.margin ? props.margin : '20px'};
`

export const ButtonStyle = styled.button`
    width: ${props => props.width ? props.width : '360px'};
    background: ${props => props.bgColor ? props.bgColor : '#ee6984'};
    height: fit-content;
    font: inherit;
    padding: ${props => props.padding ? props.padding : '22px 18px'};
    transition: box-shadow 1s;
    outline: 0;
    color: white;
    border: 0;
    
    &:hover {
        border: 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
        cursor: pointer;
    }
`