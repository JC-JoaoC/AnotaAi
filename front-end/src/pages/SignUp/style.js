import styled from "styled-components"
import backgroundImg from "../../assets/pic.jfif"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    font-family: "LXGW WenKai TC", cursive;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
  }

  > button {
    margin-bottom: 124px;
  }

  > div {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  > div span {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div a:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
