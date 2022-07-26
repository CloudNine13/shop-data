import React from 'react'
import { useNavigate } from "react-router-dom";
import { HomeContainer, GroupContainer, Header, Button } from './Home.styled'

const Home: React.FC = () => {
    const nav = useNavigate()

    function navigateTo(path: string) {
        nav(path)
    }
        
    return (
        <HomeContainer>
            <GroupContainer>
                <Header> Scrapper Shop</Header>
                <Button onClick={() => navigateTo('/items')}> Enter the shop </Button>
                <Button onClick={() => navigateTo('/table')}> See shop table </Button>
            </GroupContainer>
        </HomeContainer>
    )
}

export default Home