import { fromJS } from 'immutable';
import * as Actions from './actions.stack-list'

export const initialState = fromJS({
  data: {
    stacks: [],
    selected: undefined
  }
})

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SELECT:
      return state.setIn(['data', 'selected'], action.payload);
    default:
      return state;
  }
}
