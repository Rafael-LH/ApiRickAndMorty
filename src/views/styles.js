import styled from 'styled-components'

export const Loading = styled.h1`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerCards = styled.div`
  max-width: 1190px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px 20px;
`
export const Card = styled.div`
  border-radius: 5px;
  box-shadow: -1px 1px 9px -2px rgba(0,0,0,0.50);
  figure{
    margin: 0px;
    img{
      width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    p{
      text-align: center;
      font-size: 1.3em
    }
  }
`
export const Information = styled.div`
  p{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: ${props => props.isAlive ? "green" : "red"};
      margin-right: 5px;
    }
  }
`