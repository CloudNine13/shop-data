import { ItemsContainer, Wrapper, Title, Button, ItemButtonContainer } from './Items.styled'
import Skeleton from '../../utils/Skeleton/Skeleton'
import Item from './Item/Item'
import GetAPI from '../../API/Get'
import { useState } from 'react'
import mockData from '../../utils/mock.json'
import { useNavigate } from 'react-router-dom'

export default () => {
    const [data, setData] = useState(mockData)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    document.title = "Shop items"

    GetAPI().then(res => {
        setData(res)
        setLoading(false)
    })

    const navigateBack = () => {
        navigate(-1)
    }
        
    return (
        <Wrapper>
            <ItemButtonContainer>
                <Button onClick={() => navigateBack()}/>
                <Title>SHOP ITEMS</Title>
            </ItemButtonContainer>
            <ItemsContainer>
                { loading
                    ? mockData.map((_, i) => {
                        return (<Skeleton key={i} />)
                    })
                    : data.map((item, i) => {
                        return (<Item key={i} data={item}/>)
                    })
                }
            </ItemsContainer>
        </Wrapper>
    )
}