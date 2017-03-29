import React from 'react'
import { RaisedButton } from 'material-ui';

class FCD_Answer extends React.Component {
  render(){
    const message = this.props.message;
    const onCorrect = this.props.onCorrect;
    const onIncorrect = this.props.onIncorrect;
    const buttons = (onCorrect&&onIncorrect)?(
      <div>
        <RaisedButton onClick={ onIncorrect } >Incorrect</RaisedButton>
        <RaisedButton onClick={ onCorrect } >Correct</RaisedButton>
      </div>
    ):undefined;
    return (
      <div >
        { message }
        { buttons }
      </div>
    )
  }
};
export default FCD_Answer;

