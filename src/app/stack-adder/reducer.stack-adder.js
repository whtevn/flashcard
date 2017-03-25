import { fromJS } from 'immutable';
import * as Actions from '../stack-list/actions.stack-list'
import { reducer as formReducer } from 'redux-form';

export const Reducer = formReducer.plugin({ newStackForm: (state, action) => {
  switch (action.type) {
    case Actions.CREATE:
      return Object.assign({}, state, {values:{name:undefined}})
    default:
      return state;
  }
}})

