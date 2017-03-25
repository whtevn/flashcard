import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.card-list';
import * as Actions from './actions.card-list';

// connect component to store
export function mapStateToProps(state, ownprops){
  state = state.cards || state
  return {
    cards: state.getIn(['data', 'cards']),
    selected: state.getIn(['data', 'selected'])
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSelect: (selected, cards) => {
      dispatch(Actions.Select( fromJS({selected, cards}) ));
    }
  }
}

const FCD_CardList = connect(mapStateToProps, mapDispatchToProps)(Component);
export default FCD_CardList;

