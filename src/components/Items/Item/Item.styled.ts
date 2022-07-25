import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 272px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0.5% 2% 1.5% 2%;
    gap: 10px;
    padding: 0.75%;
    background-color: white;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: 0.05s ease-in-out;

    &:hover {
        transform: translateY(5px);
        box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.3);
    }
`

export const Description = styled.a`
    font-size: 10px;
    text-align: justify;
`

export const Price = styled.a`
    font-size: 18px;
    font-weight: Bold;
` 

export const Name = styled.a`
    align-self: center;
`

export const Image = styled.img`
    max-width: 272px;
    max-height: 160px;
    object-fit: contain;
`