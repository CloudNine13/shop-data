import React from 'react'
import { useNavigate } from "react-router-dom";
import { HomeContainer, GroupContainer, Header, Button } from './Home.styled'

export default () => {
    const nav = useNavigate()

    function navigateToShop() {
        nav("/items")
    }
        
    return (
        <HomeContainer>
            <GroupContainer>
                <Header> Scrapper Shop</Header>
                <Button onClick={() => navigateToShop()}> Enter the shop </Button>
            </GroupContainer>
        </HomeContainer>
    )
}