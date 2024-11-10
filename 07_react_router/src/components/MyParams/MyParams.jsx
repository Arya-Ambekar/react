import React from 'react'
import { useParams } from 'react-router-dom'

function MyParams() {
    const {id} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>MyParams: {id}</div>
  )
}

export default MyParams