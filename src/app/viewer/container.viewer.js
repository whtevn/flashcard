import { Map } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.viewer';
import * as Actions from './actions.viewer';

// connect component to store
function mapStateToProps(state, ownprops){
  const stacks = state.stacks;
  const game = state.game;
  return {
    // cards: getVisibleCards(state.cards, state.visibilityFilter)
    selected: game.getIn(['data', 'selected']),
    cards: game.getIn(['data', 'cards']),
    results: game.getIn(['data', 'results']),
    pin: game.getIn(['data', 'pin']),
    stackName: game.getIn(['data', 'stackName']),
    perspective: game.getIn(['data', 'perspective'])
  }
}

function mapDispatchToProps(dispatch, ownprops){
  return {
    onRecord: (selected, result) => {
      const entry = Map([[selected, result]])
      dispatch(Actions.Record( entry ));
    }
  }
}

const FCD_Viewer = connect(mapStateToProps, mapDispatchToProps)(Component);
export default FCD_Viewer;
