import React from 'react'
import {setFilter} from '../reducers/filterReducer'

const Filter = ({store}) => {
  const handleChange = (event) => {
    store.dispatch(setFilter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} /> the value is now: {store.getState().filter}
    </div>
  )
}

export default Filter
