import React, { useState, useEffect } from 'react'

import './css/main.scss'

import List from './components/List'

export default function App() {
  const [ state, setState ] = useState({
    pList: ['a', 'b', 'c'],
    owner: {
      name: 'yhl', age: 32, sex: 'male'
    }
  })
  useEffect: {
    let owner = {
      name: 'yhl', age: 32, sex: 'male'
    }
    // console.log(...owner)
    // console.log(owner == state.owner)
  }
  return (<div>
    Hello world.
    <List pList={ state.pList } owner={ state.owner }></List>
  </div>)
}