import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.stack-navigator';
import * as Actions from './actions.stack-navigator';

// connect component to store
export function mapStateToProps(state, ownprops){
  state = state.navigation || state
  return {
    viewing: state.getIn(['data', 'viewing'])
  }
}

export function mapDispatchToProps(dispatch){
  return {
    setViewing: (goto)=> dispatch(Actions.View(goto))
  }
}
const FCD_StackList = connect(mapStateToProps, mapDispatchToProps)(Component);
export default FCD_StackList;


