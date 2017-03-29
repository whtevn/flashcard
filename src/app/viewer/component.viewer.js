import React from 'react'
import FCD_Flashcard from '../flashcard'

class FCD_Viewer extends React.Component {
  render (){
    const cards=this.props.cards;
    const selected=this.props.selected;
    const record=this.props.onRecord;
    const stackName=this.props.stackName;
    return <div>
      <h3>{stackName}</h3>
      {(selected < cards.size) ? (<FCD_Flashcard
               question={cards.getIn([selected, "question"])}
               answer={cards.getIn([selected, "answer"])}
               onCorrect={()=>record(selected, "correct")}
               onIncorrect={()=>record(selected, "incorrect")} />):(<h1>Stack Complete</h1>)}
    </div>
	}
};

export default FCD_Viewer;


