import React from 'react'
import FCD_Answer from '../answer'
import FCD_Question from '../question'

class FCD_Flashcard extends React.Component {
  render (){
    const question=this.props.question;
    const answer=this.props.answer;
    const onCorrect=this.props.onCorrect;
    const onIncorrect=this.props.onIncorrect;
    return <div>
      <div>
        <FCD_Question
          message={ question } />
      </div>
      <div>
        <FCD_Answer
          message={ answer }
          onCorrect={ onCorrect }
          onIncorrect={ onIncorrect } />
      </div>
    </div>
	}
};
export default FCD_Flashcard;


