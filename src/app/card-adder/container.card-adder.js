import { fromJS } from 'immutable';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import * as CardListActions from '../card-list/actions.card-list';
import { default as Component } from './component.card-adder'

// http://redux-form.com/6.0.0-rc.1/examples/initializeFromState/

const newCardForm = reduxForm({
  form: 'newCardForm'  // a unique identifier for this form
})(Component)

// You have to connect() to any reducers that you wish to connect to yourself
export function mapDispatchToProps(dispatch){
  return {
    onSubmit: ( card ) => {
      dispatch(CardListActions.Create( fromJS({card}) ));
    }
  }
}
const FCD_CardAdder = connect(undefined, mapDispatchToProps)(newCardForm)

export default FCD_CardAdder
// this ends up being the element i put in
// this is a container just like other containers
// it just happens to be wrapped in a reduxForm
// before it is connected
