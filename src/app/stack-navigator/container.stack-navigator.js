import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.stack-navigator';
import * as Actions from './actions.stack-navigator';
import * as GameActions from '../game-form/actions.game-form';

// connect component to store
export function mapStateToProps(state, ownprops){
  state = state.navigation || state
  return {
    viewing: state.getIn(['data', 'viewing']),
    game: state.getIn(['data', 'game'])
  }
}

export function mapDispatchToProps(dispatch){
  return {
    setViewing: (goto)=> {
      if(goto === 'quit'){
        dispatch(GameActions.Quit(goto))
      }else{
        dispatch(Actions.View(goto))
      }
    }
  }
}
const FCD_StackList = connect(mapStateToProps, mapDispatchToProps)(Component);
export default FCD_StackList;


