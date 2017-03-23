import 'babel-polyfill'


import React from 'react'
import Layout from 'material-ui/Layout/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import  logger  from 'redux-logger'

injectTapEventPlugin();
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

/////////////////// TEMPORARY /////////////////////////

// loading procedure for development purposes
// need to start making tests

import { List, fromJS, Map } from 'immutable';
import { Reducer, initialState } from './app/stack-navigator';
import { initialState as viewState } from './app/viewer';

const stack_cards = List()
                      .push({question: "q 1", answer: "a 1"})
                      .push({question: "q 2", answer: "a 2"})
                      .push({question: "q 3", answer: "a 3"})
                      .push({question: "q 4", answer: "a 4"})
                      .push({question: "q 5", answer: "a 5"})
const stacks = fromJS([
  {name: 'first stack' , key: 0, cards: stack_cards },
  {name: 'second stack', key: 1, cards: stack_cards },
  {name: 'third stack' , key: 2, cards: stack_cards },
  {name: 'fourth stack', key: 3, cards: stack_cards },
  {name: 'fifth stack' , key: 4, cards: stack_cards }
])

const testState = initialState.stack
                    .setIn(['data', 'stacks'], stacks)
                    .setIn(['data', 'selected'], 0)

let store = createStore(Reducer, {stack: testState, viewer:viewState}, applyMiddleware(logger()))

import FCD_StackNavigator from './app/stack-navigator'
////////////////////////////////////////////////////////

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <FCD_StackNavigator />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('fcd-root')
)

