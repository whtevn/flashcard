import { Map } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.viewer';
import * as Actions from './actions.viewer';

// connect component to store
function mapStateToProps(state, ownprops){
  const stacks = state.stacks;
  state = state.viewer || state
  const selected =state.getIn(['data', 'selected']);
  const selectedStack =stacks.getIn(['data', 'selected']);
  return {
    // cards: getVisibleCards(state.cards, state.visibilityFilter)
    cards: state.getIn(['data', 'cards']),
    selected,
    results: state.getIn(['data', 'results']),
    pin: state.getIn(['data', 'pin']),
    stackName: stacks.getIn(['data', 'stacks']).find((stack)=>{
									return stack.get('key')===selectedStack
								}).get('name')
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
