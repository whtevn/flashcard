import { fromJS } from 'immutable';
import * as Actions from './actions.card-list'

export const initialState = fromJS({
  data: {
    cards: [],
    selected: undefined
  }
})

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SELECT:
      return state
              .setIn(['data', 'cards'], action.payload.get('cards'))
              .setIn(['data', 'results'], Map())
              .setIn(['data', 'selected'], 0);
    case Actions.CREATE:
      const cards = state.getIn(['data', 'cards']);
      return state.setIn(['data', 'cards'], cards.push(
        action.payload.get('card').merge(fromJS({
          key: cards.size
        }))))
    default:
      return state;
  }
}
