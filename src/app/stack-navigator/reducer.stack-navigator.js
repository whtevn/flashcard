import { combineReducers } from 'redux'
import { fromJS } from 'immutable';
import { Reducer as stackListReducer, initialState as stackListState } from '../stack-list/reducer.stack-list';
import { Reducer as cardListReducer, initialState as cardListState } from '../card-list/reducer.card-list';
import { Reducer as viewerReducer, initialState as viewerState } from '../viewer/reducer.viewer';
import { reducer as formReducer } from 'redux-form';
import { Reducer as newStackForm } from '../stack-adder/reducer.stack-adder.js';
import { Reducer as newCardForm } from '../card-adder/reducer.card-adder.js';
import * as NavActions from './actions.stack-navigator';

export const navigatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case NavActions.VIEW:
      return state.setIn(['data', 'viewing'], action.payload)
    default:
      return state;
  }
}


export const form = formReducer.plugin({ newStackForm, newCardForm })

export const initialState = {
  stacks: stackListState,
  cards: cardListState,
  viewer: viewerState,
  navigation: fromJS({
    data: {
      viewing: 'navigator'
    }
  })
}

export const Reducer = combineReducers({stacks: stackListReducer, cards: cardListReducer, form, viewer: viewerReducer, navigation: navigatorReducer})
