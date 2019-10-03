import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    > * {
        margin: 10px;
    }
`

export const Input = styled.input`
    width: ${props => props.width ? props + 'px' : '360px'};
    background: #fff;
    color: $input-text-color;
    font: inherit;
    border: 1px solid #e8e8e8;
    padding: 22px 18px;
    transition: box-shadow 1s;

    &:hover {
        border: 0;
        outline: 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
    }
`