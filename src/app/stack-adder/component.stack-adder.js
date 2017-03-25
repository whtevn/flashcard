import React from 'react'
import { Field } from 'redux-form'
import Button from 'material-ui/Button';

class FCD_StackAdder extends React.Component {
  render (){
    const { handleSubmit, pristine, reset, submitting , onSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field type="text" name="name" placeholder="stack name" component="input" />
        <Button raised onClick={ handleSubmit(onSubmit) }>Create Stack</Button>
      </form>
    )
  }
}

export default FCD_StackAdder;
