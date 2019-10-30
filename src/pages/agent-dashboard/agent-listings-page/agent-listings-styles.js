import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: auto;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;

    .card {
        margin: 20px;
        /* flex: 0 0 30%; */
    }
`

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    

    h2 {
        text-align: center;
        line-height: 40px;
    }
`
export const ActionBar = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ListingsContainer = styled.div`
    display: flex;
    flex-direction: row;
`