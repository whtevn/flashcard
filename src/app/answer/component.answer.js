import React from 'react'
import Button from 'material-ui/Button';

class FCD_Answer extends React.Component {
  render(){
    const message = this.props.message;
    const onCorrect = this.props.onCorrect;
    const onIncorrect = this.props.onIncorrect;
    const buttons = (onCorrect&&onIncorrect)?(
      <div>
        <Button raised contrast onClick={ onIncorrect } >Incorrect</Button>
        <Button raised onClick={ onCorrect } >Correct</Button>
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

