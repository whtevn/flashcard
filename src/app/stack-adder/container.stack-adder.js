import { fromJS } from 'immutable';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import * as StackListActions from '../stack-list/actions.stack-list';
import { default as Component } from './component.stack-adder'

// http://redux-form.com/6.0.0-rc.1/examples/initializeFromState/

const newStackForm = reduxForm({
  form: 'newStackForm'  // a unique identifier for this form
})(Component)

// You have to connect() to any reducers that you wish to connect to yourself
export function mapDispatchToProps(dispatch){
  return {
    onSubmit: ( stack ) => {
      dispatch(StackListActions.Create( fromJS({stack}) ));
    }
  }
}
const FCD_StackAdder = connect(undefined, mapDispatchToProps)(newStackForm)

export default FCD_StackAdder
// this ends up being the element i put in
// this is a container just like other containers
// it just happens to be wrapped in a reduxForm
// before it is connected
