import React from 'react'
import useGetCharacters from '../hooks/useGetCharacters'
import { Loading, ContainerCards, Card } from './styles'

const Home = () => {
  const { dataCharacters } = useGetCharacters()
  return (
    <>
      {
        !dataCharacters.results
          ? <Loading>Loading....</Loading>
          :
          <ContainerCards>
            {
              dataCharacters.results.map(item => (
                <Card key={item.id}>
                  <figure>
                    <img src={item.image} alt={item.name} />
                    <p><b>{item.name}</b></p>
                  </figure>
                  <p>
                    <span>.</span>
                    {item.status} - {item.species}
                  </p>
                </Card>
              ))
            }
          </ContainerCards>
      }
    </>
  )
}
export default Home