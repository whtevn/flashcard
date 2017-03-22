import { Map } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.stack-list';

// connect component to store
function mapStateToProps(state, ownprops){
  console.log(state.toJS());
  return {
    // cards: getVisibleCards(state.cards, state.visibilityFilter)
    stacks: state.getIn(['data', 'stacks']),
    selected: state.getIn(['data', 'selected'])
  }
}

const FCD_StackList = connect(mapStateToProps)(Component);
export default FCD_StackList;

