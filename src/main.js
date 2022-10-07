import React from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import * as RR from 'react-redux'
import store from './store'

import App from './App'

console.log(RR)

const root = createRoot(document.querySelector('#root'))
root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)