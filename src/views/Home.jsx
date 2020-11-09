import React from 'react'
import useGetCharacters from '../hooks/useGetCharacters'

const Home = () => {
  const { dataCharacters } = useGetCharacters()
  console.log(dataCharacters.results);
  return (
    <h1>Home</h1>
  )
}
export default Home