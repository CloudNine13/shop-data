import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ItemsContainer, Wrapper, Title, Button, TextButtonContainer } from './Items.styled'
import Skeleton from '../../utils/Skeleton/Skeleton'
import Item from './Item/Item'
import getAPI from '../../API/Get'
import mockData from '../../utils/mock.json'
import navigateBack from '../../utils/navigate'

export default () => {
    const [data, setData] = useState(mockData)
    const [loading, setLoading] = useState(true)
    const nav = useNavigate()
    document.title = "Shop items"
    
    useEffect(() => {
        getAPI().then(res => {
            setData(res)
            setLoading(false)
        })
    }, [])
        
    return (
        <Wrapper>
            <TextButtonContainer>
                <Button onClick={() => navigateBack(nav)}/>
                <Title>SHOP ITEMS</Title>
            </TextButtonContainer>
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