import { fromJS } from 'immutable';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import * as GameActions from './actions.game-form';
import * as StackListActions from '../stack-list/actions.stack-list';
import { default as Component } from './component.game-form'

// http://redux-form.com/6.0.0-rc.1/examples/initializeFromState/

const newGameForm = reduxForm({
  form: 'newGameForm'  // a unique identifier for this form
})(Component)

export function mapStateToProps(state, ownprops){
  state = state.stacks || state
  const selected = state.getIn(['data', 'selected']);
  return {
    selected,
    stacks: state.getIn(['data', 'stacks'])
  }
}

export function mapDispatchToProps(dispatch){
  return {
    onSubmit: ( game ) => {
      dispatch(GameActions.Start( fromJS(game) ));
    },
    onSelect: (selected, cards) => {
      dispatch(StackListActions.Select( fromJS({selected, cards}) ));
    }
  }
}
const FCD_GameForm = connect(mapStateToProps, mapDispatchToProps)(newGameForm)

export default FCD_GameForm
// this ends up being the element i put in
// this is a container just like other containers
// it just happens to be wrapped in a reduxForm
// before it is connected
