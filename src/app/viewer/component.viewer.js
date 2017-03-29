import React from 'react'
import FCD_Flashcard from '../flashcard'

class FCD_Viewer extends React.Component {
  render (){
    const cards=this.props.cards;
    const cardParam = encodeURIComponent(btoa(JSON.stringify(cards.toJS())));
    const selected=this.props.selected;
    const record=this.props.onRecord;
    const stackName=this.props.stackName;
    const pin=this.props.pin;
    const perspective=this.props.perspective;
    return <div>
      <h3>{stackName}</h3>
      <span>?stackName={stackName}&perspective={perspective}&pin={pin}&cards={cardParam}</span>
      {(selected < cards.size) ? (<FCD_Flashcard
               question={cards.getIn([selected, "question"])}
               answer={cards.getIn([selected, "answer"])}
               onCorrect={()=>record(selected, "correct")}
               onIncorrect={()=>record(selected, "incorrect")} />):(<h1>Stack Complete</h1>)}
    </div>
	}
};

export default FCD_Viewer;


