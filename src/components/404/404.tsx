import { Background, Title, Subtitle, ButtonWrapper, A } from './404.styled'

export default () => {
    document.title = "Page not found"
    return(
        <Background data-testid='bg'>
            <Title>404</Title>
            <Subtitle>This page does not exist :(</Subtitle>
            <ButtonWrapper data-testid='bw'>
            <A href='/'>Go to homepage</A>
            </ButtonWrapper>
        </Background>
    )
}