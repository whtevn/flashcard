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
      return state.setIn(['data', 'selected'], action.payload.get('selected'));
    case Actions.UPDATE:
      const { stackId, cards } = action.payload;
      return state.setIn(['data', 'stacks', stackId, 'cards'], cards)
    case Actions.CREATE:
      const stacks = state.getIn(['data', 'stacks']);

      return state.setIn(['data', 'stacks'], stacks.push(
        action.payload.get('stack').merge(fromJS({
          cards: [],
          key: stacks.size
        }))))
    default:
      return state;
  }
}
