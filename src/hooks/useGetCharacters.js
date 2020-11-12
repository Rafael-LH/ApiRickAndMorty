import React, { useEffect, useState } from 'react'
import apolloClient from '../config/apolloClient'
import { gql } from '@apollo/client';

const getCharacters = async (page, setDataCharacters, setDataInfo) => {
  const response = await apolloClient.client.query({
    query: gql`
          query{
            characters(page: ${page}){
              info{
                pages
                next
                prev
              },
              results{
                id
                name
                image
                status
                species
              }
          }
        }
      `
  })
  const { data } = response
  const { characters } = data
  const { info } = characters
  setDataCharacters(characters)
  setDataInfo(info)
}

export const useGetCharacters = (setLoader) => {
  const [dataCharacters, setDataCharacters] = useState([])
  const [dataInfo, setDataInfo] = useState([])

  const handleClick = async (e) => {
    e.preventDefault()
    setLoader(true)
    await getCharacters(e.target.dataset.page, setDataCharacters, setDataInfo)
    setLoader(false)
  }
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoader(true)
      await getCharacters(1, setDataCharacters, setDataInfo)
      setLoader(false)
    }
    fetchCharacters();
  }, [])

  return { dataCharacters, dataInfo, handleClick }
}