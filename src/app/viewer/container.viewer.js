import { connect } from 'react-redux';
import { default as Component } from './component.viewer';
import { Actions } from './actions.viewer';

// connect component to store
function mapStateToProps(state, ownprops){
  console.log(state.toJS());
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
      dispatch(Actions.Record({
        selected: result
      }));
    }
  }
}

const FCD_Viewer = connect(mapStateToProps, mapDispatchToProps)(Component);
export default FCD_Viewer;
