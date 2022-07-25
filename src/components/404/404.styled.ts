import styled from 'styled-components'

export const Background = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Raleway:700);
  background: url(https://i.imgur.com/76NZB7A.gif) no-repeat center center fixed;
  background-size: cover;
  font-family: 'Raleway', sans-serif;
  margin-left: -8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.div`
  font-size: 6em;
  font-weight: 700;
  color: #EE4B5E;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 3em;
  }
`

export const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #1f8dd6;

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 1.5em;
  }
`

export const ButtonWrapper = styled.div`
  margin: 30px;
`

export const A = styled.a`
  font-weight: 700;
  border: 2px solid #EE4B5E;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: #EE4B5E;
  border-radius: 26px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #EE4B5E;
    color: white;
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 10px;

    &:active {
      background-color: #EE4B5E;
      color: white;
    }
  }
`
