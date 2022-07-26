import { ItemContainer, Image, Description, Price, Name } from './Item.styled'

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
    const item = props.data
    
    return(
        <ItemContainer>
            <Image src={item.Image} />
            <Price>${item.Price}</Price>  
            <Name>{item.Name}</Name>
            <Description> {item.Description}</Description>
        </ItemContainer>
    )
}

export default Item