import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0% {
        background-color: hsl(200, 20%, 80%);
    }
    100% {
        background-color: hsl(200, 20%, 95%);
    }
`

const animation = styled.div`
    border-radius: 1em;
    animation: ${blink} 1s linear infinite alternate;
`

export const SkeletonContainer = styled.div`
    width: 272px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin: 2%;
    gap: 10px;
    padding: 0.75%;
    background-color: white;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`

export const Image = styled(animation)`
    align-self: center;
    width: 135px;
    height: 160px;
`

export const Price = styled(animation)`
    width: 80px;
    height: 20px;
`

export const Name = styled(animation)`
    align-self: center;
    width: 120px;
    height: 16px;
    margin-bottom: 10px;
`

export const Text = styled(animation)`
    align-self: center;    
    width: 95%;
    height: 10px;
`