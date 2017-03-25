import { Map } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.stack-update-button';
import * as StackListActions  from '../stack-list/actions.stack-list';

// connect component to store
export function mapStateToProps(state, ownprops){
  return {
    cards: state.cards.getIn(['data', 'cards']),
    stackId: state.stacks.getIn(['data', 'selected'])
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSave: (stack) => {
      dispatch(StackListActions.Update( stack ));
    }
  }
}

const FCD_CardList = connect(mapStateToProps, mapDispatchToProps)(Component);
export default FCD_CardList;
