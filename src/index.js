import 'babel-polyfill'


import React from 'react'
import Layout from 'material-ui/Layout';
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

import FCD_Flashcard from './app/flashcard'
///////////////

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <FCD_Flashcard
         question="question"
         answer="answer"
         onCorrect={()=>console.log("yay")}
         onIncorrect={()=>console.log("boo")} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('fcd-root')
)

