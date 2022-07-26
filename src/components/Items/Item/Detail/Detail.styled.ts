import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const DetailContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 2.5%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 30%;
    height: 60%;
    object-fit: contain;
`

export const DetailView = styled.div`
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    background: #F7F7F7;
    gap: 5%;
    align-items: center;
    justify-content: center;
`

export const A = styled.a`
    margin: 10%;
    text-align: justify;
`