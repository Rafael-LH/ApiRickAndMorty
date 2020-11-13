import React from 'react'
import { gql } from '@apollo/client'

export const getCharctersQuery = gql`
    query getCharacters($page: Int!){
      characters(page: $page){
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