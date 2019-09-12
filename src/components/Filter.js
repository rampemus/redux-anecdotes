import React from 'react'
import { connect } from 'react-redux'
import {setFilter} from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    props.setFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} /> the value is now: {props.filter}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    setFilter
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)
