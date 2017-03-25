import React from 'react'
import { Field } from 'redux-form'
import { RaisedButton, RadioButton, MenuItem, SelectField } from 'material-ui';
import { RadioButtonGroup} from 'redux-form-material-ui';

class FCD_GameForm extends React.Component {
  render (){
    const { handleSubmit, pristine, reset, submitting , onSubmit, stacks, selected} = this.props
    return (
			<form onSubmit={handleSubmit(onSubmit)}>
        <Field name="stack" component="select" value={selected}>
            {stacks.map(stack => <Field component="option" name={`${stack.get('key')}`} key={stack.get('key')} value={stack.get('key')}>{stack.get('name')}</Field>)}
        </Field>
        <Field name="perspective" component={RadioButtonGroup}>
          <RadioButton value="teacher" label="Teacher"/>
          <RadioButton value="student" label="Student"/>
        </Field>
        <RaisedButton onClick={ handleSubmit(onSubmit) }>Start Game</RaisedButton>
      </form>
    )
  }
}

export default FCD_GameForm;
