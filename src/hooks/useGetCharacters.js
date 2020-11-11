import React, { useEffect, useState } from 'react'
import apolloClient from '../config/apolloClient'
import { gql } from '@apollo/client';

const useGetCharacters = () => {
  const [dataCharacters, setDataCharacters] = useState([])
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await apolloClient.client.query({
        query: gql`
          query getCharacters{
            characters{
              results{
                id
                name
                status
                image
                species
              }
            }
          }
        `
      })
      const { data } = response
      const { characters } = data
      setDataCharacters(characters)
    }
    return fetchCharacters()
  }, [])

  return { dataCharacters }
}
export default useGetCharacters