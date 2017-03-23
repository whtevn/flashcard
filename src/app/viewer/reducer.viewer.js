import * as Actions from './actions.viewer'
import * as StackListActions from '../stack-list/actions.stack-list'
import { fromJS , Map } from 'immutable';

export const initialState = fromJS({
  data: {
    cards: [],
    selected: undefined,
    results: {}
  }
})

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case StackListActions.SELECT:
      return state
              .setIn(['data', 'cards'], action.payload.get('cards'))
              .setIn(['data', 'results'], Map())
              .setIn(['data', 'selected'], 0);
    case Actions.RECORD:
      // expects { flashcard_id: "CORRECT" }
      const next = state.getIn(['data', 'selected'])+1;
      return state
              .mergeIn(['data', 'results'], action.payload)
              .setIn(['data', 'selected'], next)
    default:
      return state;

  }
}

