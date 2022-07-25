import { ItemContainer, Image, Description, Price, Name } from './Item.styled'

export default (props : { data: { Name: string, Price: string, Description: string, Image: string } } ) => {

    const item = props.data
    
    return(
        <ItemContainer>
            <Image src={item.Image} />
            <Price>{item.Price}</Price>  
            <Name>{item.Name}</Name>
            <Description> {item.Description}</Description>
        </ItemContainer>
    )
}