import { Map } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.viewer';
import * as Actions from './actions.viewer';

// connect component to store
function mapStateToProps(state, ownprops){
  const stacks = state.stacks;
  const game = state.navigation.getIn(['data', 'game'])
  state = state.viewer || state
  return {
    // cards: getVisibleCards(state.cards, state.visibilityFilter)
    selected: game.get('selected'),
    cards: game.get('cards'),
    results: game.get('results'),
    pin: game.get('pin'),
    stackName: game.get('stackName'),
    perspective: game.get('perspective')
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
