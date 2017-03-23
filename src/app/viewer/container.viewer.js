import { Map } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.viewer';
import * as Actions from './actions.viewer';

// connect component to store
function mapStateToProps(state, ownprops){
  state = state.viewer || state
  return {
    // cards: getVisibleCards(state.cards, state.visibilityFilter)
    cards: state.getIn(['data', 'cards']),
    selected: state.getIn(['data', 'selected']),
    results: state.getIn(['data', 'results'])
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
