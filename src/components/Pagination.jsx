import React from 'react'
import { ContainerPagination, ContainerInformation, ContainerButtons, PrevButton, NextButton } from './stylesPagination'

const Pagination = ({ handleClick, dataInfo }) => (
  <ContainerPagination>
    <ContainerButtons>
      <PrevButton
        onClick={handleClick}
        data-page={dataInfo.prev}
        isDisabled={!dataInfo.prev && true}
        disabled={!dataInfo.prev}> Anterior </PrevButton>
      <NextButton
        onClick={handleClick}
        data-page={dataInfo.next}
        isDisabled={dataInfo.prev + 1 === dataInfo.pages}
        disabled={dataInfo.prev + 1 === dataInfo.pages}> Siguiente </NextButton>
    </ContainerButtons>
    <ContainerInformation>
      <p>Total: {dataInfo.pages}</p>
      <p>Pagína {dataInfo.prev ? dataInfo.prev + 1 : '1'} de {dataInfo.pages}</p>
    </ContainerInformation>
  </ContainerPagination>
)
export default Pagination