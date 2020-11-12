import styled from 'styled-components'

export const ContainerPagination = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerInformation = styled.div`
  padding: 20px;
  p{
    font-size: 1.2em;
    margin: 0px;
    margin-top: 5px;
    font-weight: bold;
  }
`
export const ContainerButtons = styled.div`
  button{
    border-radius: 5px;
    margin-right: 10px;
    border: none;
    padding: 8px;
    font-size: 1.2em;
    color: #fff;
    cursor: pointer;
    width: 100px;
  }
`
export const PrevButton = styled.button`
  background-color: ${props => props.isDisabled ? "grey" : "#040677"}
`
export const NextButton = styled.button`
  background: ${props => props.isDisabled ? "grey" : '#040677'};
`
