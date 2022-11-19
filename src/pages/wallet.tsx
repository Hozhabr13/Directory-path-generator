import React from 'react'
import { useParams } from 'react-router-dom'

const Wallet = () => {
  const { id } = useParams()

  return (
        <>
            <h1>
                Walleteeeee { id }
            </h1>
        </>
  )
}

export default Wallet
