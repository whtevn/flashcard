import * as Actions from './actions.viewer'
import * as StackListActions from '../stack-list/actions.stack-list'
import * as GameActions from '../game-form/actions.game-form'
import { fromJS , Map , List } from 'immutable';

export const initialState = fromJS({
  data: {
    cards: [],
    results: [],
    selected: undefined,
    stackName: undefined
  }
})

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GameActions.START:
      return state
              .mergeIn(['data'], action.payload)
    case StackListActions.SELECT:
      const cards = action.payload.get('cards');
      return state
              .setIn(['data', 'cards'], cards)
              .setIn(['data', 'results'], List())
              .setIn(['data', 'selected'], cards.first().get('key'));
    case Actions.RECORD:
      // expects { flashcard_id: "CORRECT" }
      const next = state.getIn(['data', 'selected'])+1;
      return state
              .updateIn(['data', 'results'], list=>list.push(action.payload))
              .setIn(['data', 'selected'], next)
    default:
      return state;

  }
}

