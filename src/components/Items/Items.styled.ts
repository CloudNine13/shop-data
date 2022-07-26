import styled from "styled-components";

const div = styled.div`
    background-color: #FBF8EC;
`

export const Button = styled.div`
    min-height: 24px;
    min-width: 24px;
    background: url('/back.svg');
    transition: 0.25s ease-in-out;

    &:hover {
        filter: drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.8));
    }

    &:active {
        transform: translateY(2px);
    }
`

export const ItemsContainer = styled(div)`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: row wrap;
`

export const Wrapper = styled(div)`
    font-family: 'Rubik'; 
    overflow: auto;   
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.div`
    font-size: 30px;.
    font-weight: 800;
    color: white;
    text-shadow: -1.2px 0 black, 0 1.2px black, 1.2px 0 black, 0 -1.2px black;
`

export const TextButtonContainer = styled.div` 
    padding: 1.75% 0 0.25% 2%; 
    box-sizing: border-box;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: row;
`