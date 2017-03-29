import React from 'react'
import { Field } from 'redux-form'
import { RaisedButton } from 'material-ui';

class FCD_CardAdder extends React.Component {
  render (){
    const { handleSubmit, pristine, reset, submitting , onSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field type="text" name="question" placeholder="question" component="input" />
        <Field type="text" name="answer" placeholder="answer to question" component="input" />
        <RaisedButton onClick={ handleSubmit(onSubmit) }>Create Card</RaisedButton>
      </form>
    )
  }
}

export default FCD_CardAdder;
