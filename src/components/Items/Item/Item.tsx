import { ItemContainer, Image, Description, Price, Name } from './Item.styled'
import navigate from '../../../utils/navigate'
import { useNavigate } from 'react-router-dom'

interface Props {
    key: number, 
    data: {
        Name: string, 
        Price: number, 
        Description: string, 
        Image: string 
    }
}

const Item: React.FC<Props> = (props) => {
    const nav = useNavigate()
    const item = props.data
    
    return(
        <ItemContainer onClick={() => navigate(nav, '/detail', { state: item })}>
            <Image src={item.Image} />
            <Price>${item.Price}</Price>  
            <Name>{item.Name}</Name>
            <Description> {item.Description}</Description>
        </ItemContainer>
    )
}

export default Item