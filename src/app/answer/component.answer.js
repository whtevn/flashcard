import React from 'react'
import Button from 'material-ui/Button';

const FCD_Answer = ( { message, onCorrect, onIncorrect } ) => {
  return (
    <div >
      { message }
      <Button raised contrast onClick={ onIncorrect} >Incorrect</Button>
      <Button raised onClick={ onCorrect} >Correct</Button>
    </div>
	)
};
export default FCD_Answer;

