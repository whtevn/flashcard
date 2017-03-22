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

// import initial state instead of initializing
import { Reducer, initialState } from './app/viewer';
// set with this
import { fromJS } from 'immutable';

const cards = fromJS([
  {question: 'first question', answer: 'first answer'}
])
const testState = initialState
                    .setIn(['data', 'cards'], cards)
                    .setIn(['data', 'selected'], 0)
let store = createStore(Reducer, testState)

// hydrate initial state

import FCD_Viewer from './app/viewer'
///////////////

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <FCD_Viewer />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('fcd-root')
)

