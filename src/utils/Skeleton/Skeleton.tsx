import { SkeletonContainer, Image, Price, Name, Text } from './Skeleton.styled'

export default () => {
    return (
         <SkeletonContainer>
            <Image />
            <Price />  
            <Name />
            <Text />  
            <Text />  
            <Text />  
            <Text />  
        </SkeletonContainer>
    )
}