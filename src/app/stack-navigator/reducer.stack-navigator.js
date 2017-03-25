import { combineReducers } from 'redux'
import { Reducer as stackListReducer, initialState as stackListState } from '../stack-list/reducer.stack-list';
import { Reducer as cardListReducer, initialState as cardListState } from '../card-list/reducer.card-list';
import { reducer as formReducer } from 'redux-form';
import { Reducer as newStackForm } from '../stack-adder/reducer.stack-adder.js';
import { Reducer as newCardForm } from '../card-adder/reducer.card-adder.js';

export const form = formReducer.plugin({ newStackForm, newCardForm })

export const initialState = {
  stacks: stackListState,
  cards: cardListState
}

export const Reducer = combineReducers({stacks: stackListReducer, cards: cardListReducer, form})
