import styled from 'styled-components'

export const Title = styled.h1`
  color: #040677;
  text-align: center;
  margin: 30px 0;
  font-size: 2.3em;
`
export const Loading = styled.h1`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  letter-spacing: 3px;
`
export const ContainerCards = styled.div`
  max-width: 1190px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px 20px;
  padding: 10px;
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
  }
`
export const Information = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    h1{
      text-align: center;
      font-size: 1.3em;
      width: 100%;
    }
    p{
      display: flex;
      text-align: center;
      align-items: center;
      margin-top: 10px;
      span{
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: ${props => props.isAlive ? "green" : "red"};
        margin-right: 5px;
      }
  }
`