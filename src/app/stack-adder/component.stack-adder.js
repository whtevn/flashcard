import React from 'react'
import { Field } from 'redux-form'
import { RaisedButton } from 'material-ui';

class FCD_StackAdder extends React.Component {
  render (){
    const { handleSubmit, pristine, reset, submitting , onSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field type="text" name="name" placeholder="stack name" component="input" />
        <RaisedButton onClick={ handleSubmit(onSubmit) }>Create Stack</RaisedButton>
      </form>
    )
  }
}

export default FCD_StackAdder;
