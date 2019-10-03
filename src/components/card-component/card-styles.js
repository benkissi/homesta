import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? props.width : '100%'};

    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    
    :hover, :focus, :active {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    }

    .card-image {
        position: relative;
        margin-bottom: -10px;

        img {
            width: 100%;
        }
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
`