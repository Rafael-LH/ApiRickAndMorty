import React from 'react'

export const useForm = (setPage) => {
  const handleClick = async (e) => {
    e.preventDefault()
    setPage(Number(e.target.dataset.page))
  }
  return { handleClick }
}