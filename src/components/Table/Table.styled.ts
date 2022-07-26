import styled from 'styled-components'

export const Wrapper = styled.div`
    background: linear-gradient(180deg, rgba(128,128,128,1) 0%, rgba(90,90,110,1) 45%, rgba(58,65,81,1) 90%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const GridContainer = styled.div`
    align-self: center;
    width: 80%;
    height: 100%;
    margin-bottom: 29px;
`

export const Button = styled.div`
    min-height: 24px;
    min-width: 24px;
    background: url('/back.svg');
    transition: 0.25s ease-in-out;

    &:hover {
        filter: drop-shadow(1px 2px 10px rgba(255, 255, 255, 1));
    }

    &:active {
        transform: translateY(2px);
    }
`

export const Title = styled.div`
    font-size: 30px;.
    font-weight: 800;
    text-transform: uppercase;
    color: white;
    text-shadow: -1.2px 0 black, 0 1.2px black, 1.2px 0 black, 0 -1.2px black;
`

export const TextButtonContainer = styled.div` 
    margin: 2% 0 1% 0; 
    width: 80%;
    align-self: center;
    align-items: center;
    box-sizing: border-box;
    gap: 10px;
    display: flex;
    flex-direction: row;
`