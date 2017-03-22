import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const flashcardReducer = (state) => state
const initialState = {}

let store = createStore(flashcardReducer, initialState)

render(
  <Provider store={store}>
    <div>hello world!</div>
  </Provider>,
  document.getElementById('fcd-root')
)

