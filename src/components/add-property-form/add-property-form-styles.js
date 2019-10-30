import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: white;

    .error-message {
        color: red;
        font-weight: bold;
    }
`
export const Detail = styled.div`
    p {
        margin-bottom: -5px;
    }
`

export const BlockDetail = styled.div`
    display: flex;
    justify-content: space-evenly;

    > * {
        flex: 1;
        margin: 5px;
    }
`

export const ThumbnailHolder = styled.div`
    display: flex;
`

export const ThumbnailCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #cdcdcd;
    border-radius:3px;
    padding: 5px;
    width: 15%;
    height: auto;
    margin: 10px;
`
export const ThumbnailImage = styled.img`
    width: 100%;
`
