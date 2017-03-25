import { fromJS } from 'immutable';
import * as Actions from '../stack-list/actions.stack-list'

export const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.CREATE:
      return Object.assign({}, state, {values:{name:undefined}})
    default:
      return state;
  }
}

