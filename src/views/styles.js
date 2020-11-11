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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const Card = styled.div`
  border-radius: 5px;
  border: 1px solid red;
  figure{
    margin: 0px;
    p{
      text-align: center;
    }
  }
`