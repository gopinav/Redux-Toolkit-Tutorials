import React from 'react'
import { useSelector } from 'react-redux'
export const IcecreamView = () => {
  const icecream = useSelector(state => state.icecream)
  return (
    <div>
      <h2>Number of ice creams - {icecream.numOfIcecreams}</h2>
      <button>Order Ice cream</button>
      <button>Restock Ice creams</button>
    </div>
  )
}
