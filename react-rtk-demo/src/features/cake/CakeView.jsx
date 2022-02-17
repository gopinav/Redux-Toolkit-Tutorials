import React from 'react'
import { useSelector } from 'react-redux'

export const CakeView = () => {
  const cake = useSelector(state => state.cake)
  return (
    <div>
      <h2>Number of cakes - {cake.numOfCakes}</h2>
      <button>Order Cake</button>
      <button>Restock Cakes</button>
    </div>
  )
}
