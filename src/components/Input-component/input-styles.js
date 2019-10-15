import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: ${(props) => props.width ? props.width : '100%'};
    position: relative;

    > * {
        margin-bottom: 10px;
        margin-top: 10px;
    }
`

export const InputField = styled.input`
    width: 100%;
    background: #fff;
    font: inherit;
    border: 1px solid #e8e8e8;
    padding: 22px 18px;
    transition: box-shadow 1s;
    outline: 0;

    &:hover {
        border: 0;
        
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
    }
`