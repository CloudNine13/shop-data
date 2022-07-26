import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100%; 
    weight: 100%;
    background: url("https://img.freepik.com/premium-photo/blurred-background-grocery-store_23-2148216105.jpg?w=2000") center;
    background-size: cover;
`

export const GroupContainer = styled.div`
    position: absolute;
    left: 13%;
    top: 30%;
    padding: 1%;
    width: 33%;
    min-width: fit-content;
    height: 255px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: black;
`

const text = styled.div`
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
`

export const Header = styled(text)`
    font-size: 100px;
    line-height: 151px;
    margin-bottom: 5%;
    color: white;
    text-shadow: -1.5px 0 black, 0 1px black, 1.5px 0 black, 0 -1.5px black;
`

export const Button = styled(text)`
    width: 15%;
    height: 12%;
    margin-bottom: 30px;
    background: transparent;
    min-width: fit-content; 
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: 17px;
    line-height: 26px;
    padding: 1%;
    user-select: none;

    &:active {
        transform: translateY(2px);
    }
`
