import styled from 'styled-components'

export const SectionWrapper = styled.div`
    height: ${props => props.setHeight ? props.setHeight : '100vh'};
    background-color: ${props => props.bgColor};
    color: ${props => props.fontColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;
    overflow: hidden;
    margin-top: 50px;

    h1 {
        font-size: 40px;
    }

    hr {
        width: 100px;
        border: 1px solid #8490ff;
    }
`