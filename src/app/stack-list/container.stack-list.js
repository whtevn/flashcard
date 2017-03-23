import { Map } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.stack-list';
import * as Actions from './actions.stack-list';

// connect component to store
function mapStateToProps(state, ownprops){
  state = state.stack || state
  return {
    stacks: state.getIn(['data', 'stacks']),
    selected: state.getIn(['data', 'selected'])
  }
}

function mapDispatchToProps(dispatch){
  return {
    onSelect: (selected) => {
      dispatch(Actions.Select( selected ));
    }
  }
}

const FCD_StackList = connect(mapStateToProps, mapDispatchToProps)(Component);
export default FCD_StackList;

