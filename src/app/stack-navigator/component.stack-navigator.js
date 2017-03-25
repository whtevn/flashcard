import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Layout } from 'material-ui';
import FCD_StackList from '../stack-list';
import FCD_CardList from '../card-list';
import FCD_StackAdder from '../stack-adder';
import FCD_StackUpdateButton from '../stack-update-button';
import FCD_CardAdder from '../card-adder';
import FCD_Viewer from '../viewer';
import FCD_GameForm from '../game-form';
import { Reducer, initialState } from '.';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  logger  from 'redux-logger'

/////////////////// TEMPORARY /////////////////////////
// loading procedure for development purposes
// need to start making tests

import { List, fromJS, Map } from 'immutable';

const stack_cards = List()
                      .push(Map({key: 0, question: "q 1", answer: "a 1"}))
                      .push(Map({key: 1, question: "q 2", answer: "a 2"}))
                      .push(Map({key: 2, question: "q 3", answer: "a 3"}))
                      .push(Map({key: 3, question: "q 4", answer: "a 4"}))
                      .push(Map({key: 4, question: "q 5", answer: "a 5"}))
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
////////////////////////////////////////////////////////*
//let store = createStore(Reducer, applyMiddleware(logger({
//  stateTransformer: (s) => Map(s).toJS()
//})))
////////////////////////////////////////////////////////


class FCD_StackNavigator extends React.Component {
  render (){
    return (
    <Provider store={store}>
      <MuiThemeProvider>
        <div>
          < FCD_StackAdder />
          < FCD_StackList />
          < FCD_CardList />
          < FCD_CardAdder />
          < FCD_StackUpdateButton />
          < FCD_GameForm />
        </div>
      </MuiThemeProvider>
    </Provider>
    )
  }
}
export default FCD_StackNavigator;

