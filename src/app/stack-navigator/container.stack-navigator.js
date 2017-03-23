import { Map } from 'immutable';
import { connect } from 'react-redux';
import { default as Component } from './component.stack-navigator';
import * as Actions from './actions.stack-navigator';

// connect component to store
function mapStateToProps(state, ownprops){
  state = state.stack || state
  const stacks = state.getIn(['data', 'stacks']);
  const selected = state.getIn(['data', 'selected']);
  const cards = stacks.find(s=>s.get('key')===selected).get('cards');
  return {
    stacks,
    selected,
    cards
  }
}

function mapDispatchToProps(state){
  return {
    onSelect: (selected) => {
      dispatch(Actions.Select( selected ));
    },
    onRecord: (selected, result) => {
      const entry = Map([[selected, result]])
      dispatch(Actions.Record( entry ));
    }
  }
}

const FCD_StackNavigator = connect(mapStateToProps)(Component);
export default FCD_StackNavigator;

