import * as Actions from './actions.viewer'
import { fromJS } from 'immutable';

export const initialState = fromJS({
  data: {
    cards: [],
    selected: undefined,
    results: {}
  }
})

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
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

