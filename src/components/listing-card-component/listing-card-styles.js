import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: ${props => props.width ? props.width : '100%'};
    height: auto;
    border: 1px solid #d8d8d8;

    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    
    :hover, :focus, :active {
        border: 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .2);
        cursor: pointer;
    }
`

export const ImageWrapper = styled.div`
    display: relative;
    width: 40%;
    
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    width: auto;
    height: auto;
`

export const Details = styled.div`

`

export const Insights = styled.div`

`