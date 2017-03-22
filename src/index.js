import 'babel-polyfill'


import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

injectTapEventPlugin();
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

// TEMPORARY //
const flashcardReducer = (state) => state
const initialState = {}

let store = createStore(flashcardReducer, initialState)
///////////////

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <div>hello world!</div>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('fcd-root')
)

