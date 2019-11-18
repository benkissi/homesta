import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: white;
    position: relative;
    width: 100%;

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
    width: 100%;
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
    position: relative;

    #overlay{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
        filter: alpha(opacity=50);
        z-index:10;
    }

    :hover{
        #overlay{
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
`
export const ThumbnailImage = styled.img`
    width: 100%;
`
