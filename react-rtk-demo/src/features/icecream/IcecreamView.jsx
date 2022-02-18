import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input
        type='number'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice creams
      </button>
    </div>
  )
}
