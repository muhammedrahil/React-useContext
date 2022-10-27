import React,{useContext} from 'react'
import {Appcontext} from '../../AppContext'

function Two() {
  const {data} = useContext(Appcontext)
  return (
    <div>
      <h1>Two {data}</h1>
    </div>
  )
}

export default Two
