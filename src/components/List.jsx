import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slice'

export default function List(props) {
  // console.log(props.owner)
  // function Fn(a,b,...arg) {
  //   // console.log(...arg)
  //   // console.log(arg.map)
  //   console.log([...arguments])
  //   console.log(Array.prototype.slice.call(arguments))
  // }
  // Fn(11,22,33,44,55)
  // // console.log(Fn.length)

  // const arr = [5,2,8,6,1,9,8,2]
  // console.log(...new Set(arr))
  // console.log(arr)

  // const [a,b, ...cc] = arr
  // console.log(cc)

  // console.log(props.owner)

  const count = useSelector(state => state.value)
  const dispatch = useDispatch()

  return <div>
    <p>{ '123456' }</p>
    <ul>
      { props.pList.map((item, index) => {
          <li key={ index }>{ item }</li>
        })
      }
    </ul>
    <button onClick={() => dispatch(increment())}> + </button> { count }
    <button onClick={() => dispatch(decrement())}> - </button>
  </div>
}