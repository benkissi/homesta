import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: ${props => props.width ? props.width : "100%"};
    margin-bottom: 10px;
    margin-top: 10px;
`

export const Textarea = styled.textarea`
    width: 100%;
    position: relative;
    background: #fff;
    font: inherit;
    border: 1px solid #e8e8e8;
    padding: ${(props) => props.form === "true" ? "10px 18px" : "22px 18px"};
    transition: box-shadow 1s;
    outline: 0;

    &:hover {
        border: 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
    }
`