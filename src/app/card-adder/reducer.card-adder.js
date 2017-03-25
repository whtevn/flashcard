import { fromJS } from 'immutable';
import * as Actions from '../card-list/actions.card-list'
import { reducer as formReducer } from 'redux-form';

export const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.CREATE:
      return Object.assign({}, state, {values:{question:undefined,answer:undefined}})
    default:
      return state;
  }
}

