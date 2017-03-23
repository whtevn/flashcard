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

const stack_cards = List()
                      .push(Map({question: "q 1", answer: "a 1"}))
                      .push(Map({question: "q 2", answer: "a 2"}))
                      .push(Map({question: "q 3", answer: "a 3"}))
                      .push(Map({question: "q 4", answer: "a 4"}))
                      .push(Map({question: "q 5", answer: "a 5"}))
const stacks = fromJS([
  {name: 'first stack' , key: 0, cards: stack_cards },
  {name: 'second stack', key: 1, cards: stack_cards },
  {name: 'third stack' , key: 2, cards: stack_cards },
  {name: 'fourth stack', key: 3, cards: stack_cards },
  {name: 'fifth stack' , key: 4, cards: stack_cards }
])

const testState = Object.assign({}, initialState, {stacks: initialState.stacks.setIn(['data', 'stacks'], stacks).setIn(['data', 'selected'], 0)})

let store = createStore(Reducer, testState, applyMiddleware(logger({
  stateTransformer: (s) => Map(s).toJS()
})))

import FCD_StackNavigator from './app/stack-navigator'
////////////////////////////////////////////////////////

render(
    <Provider store={store}>
      <MuiThemeProvider>
        <FCD_StackNavigator />
      </MuiThemeProvider>
    </Provider>,
  document.getElementById('fcd-root')
)

