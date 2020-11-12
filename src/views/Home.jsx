import React, { useState } from 'react'
import { useGetCharacters } from '../hooks/useGetCharacters'
import Pagination from '@components/Pagination'
import { Title, Loading, ContainerCards, Card, Information } from './styles'

const Home = () => {
  const [laoder, setLoader] = useState(false)
  const { dataCharacters, dataInfo, handleClick } = useGetCharacters(setLoader)

  return (
    <>
      <Title>API Rick & Morty</Title>
      {
        laoder && <Loading>Loading....</Loading>
      }
      <>
        <ContainerCards>
          {
            dataCharacters.results && dataCharacters.results.map(item => (
              <Card key={item.id}>
                <figure>
                  <img src={item.image} alt={item.name} />
                </figure>
                <Information isAlive={item.status === 'Alive'} >
                  <h1>{item.name}</h1>
                  <p>
                    <span></span>
                    {item.status} - {item.species}
                  </p>
                </Information>
              </Card>
            ))
          }
        </ContainerCards>
        <Pagination
          handleClick={handleClick}
          dataInfo={dataInfo}
        />
      </>
    </>
  )
}
export default Home