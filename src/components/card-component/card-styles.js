import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: ${props => props.width ? props.width : '100%'};

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

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #d8d8d8;

`

export const SubDetails = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const Title = styled.div`
    h3 {
        margin-top: 10px;
        margin-bottom: 0;
    }
`

export const Desc = styled.div`
    p {
        margin-top: 10px;
        margin-bottom: 0;
    }
`

export const Price = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    
`

export const Image = styled.div`
    position: relative;
    margin-bottom: -10px;
    width: 100%;
    height: 200px;
    background-image: url(${props => props.image ? props.image : ''});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;

`