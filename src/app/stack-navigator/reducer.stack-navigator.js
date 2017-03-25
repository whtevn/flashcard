import { combineReducers } from 'redux'
import { Reducer as stackListReducer, initialState as stackListState } from '../stack-list/reducer.stack-list';
import { Reducer as cardListReducer, initialState as cardListState } from '../viewer/reducer.viewer';
import { Reducer as form } from '../stack-adder/reducer.stack-adder.js';

export const initialState = {
  stacks: stackListState,
  cards: cardListState
}

export const Reducer = combineReducers({stacks: stackListReducer, cards: cardListReducer, form})
