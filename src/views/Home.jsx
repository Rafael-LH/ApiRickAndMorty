import React, { useState } from 'react'
import Pagination from '@components/Pagination'
import { useForm } from '../hooks/useForm'
import { getCharctersQuery } from '../graphql/getCharactersQuery'
import { Title, Loading, ContainerCards, Card, Information } from './styles'
import { gql, useQuery } from '@apollo/client';

const Home = () => {
  const [page, setPage] = useState(1)
  const { handleClick } = useForm(setPage)
  const { loading, error, data } = useQuery(getCharctersQuery, {
    variables: { page: page },
  });
  if (error) return <h1>Ha ocurrido algun error, intentalo más tarde</h1>

  return (
    <>
      {loading && <Loading>Loading....</Loading>}
      <Title>API Rick & Morty</Title>
      <ContainerCards>
        {
          !loading && data.characters.results.map(item => (
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
      {
        !loading &&
        <Pagination
          handleClick={handleClick}
          dataInfo={data.characters.info}
        />
      }
    </>
  )
}
export default Home