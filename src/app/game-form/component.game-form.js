import React from 'react'
import { Field } from 'redux-form'
const { DOM: { input, select, textarea } } = React
import { RaisedButton, RadioButton, MenuItem, SelectField } from 'material-ui';
import { RadioButtonGroup} from 'redux-form-material-ui';

class FCD_GameForm extends React.Component {
  constructor(props){
    const { selected, stacks} = props
    const stack = stacks.find(s=>s.get('key') === selected);
    const name = stack.get('name');
    const cards = stack.get('cards');
    props.initialize({stack: selected, name, cards})
    super();
  }

  render (){
    const { handleSubmit,
            pristine,
            reset,
            submitting,
            onSubmit,
            stacks,
            selected,
            cards, name, onSelect} = this.props
    return (
			<form onSubmit={handleSubmit(onSubmit)}>
        <Field name="name" component="hidden" />
        <Field name="cards" component="hidden" />
        <Field name="stack" component="select" onChange={(e, val)=>{
          onSelect(val, this.props.stacks.find(stack=> {
            return stack.get('key') === +(val)
          }).get('cards'))
        }

        } >
          {stacks.map(stack => <option name={`${stack.get('key')}`} key={stack.get('key')} value={stack.get('key')}>{stack.get('name')}</option>)}
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
