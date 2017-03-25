import React from 'react'
import FCD_Flashcard from '../flashcard';

class FCD_CardList extends React.Component {
  render (){
    const cards = this.props.cards;
    const onSelect = this.props.onSelect;
    return (
      <div >
        { cards.map((card) => < FCD_Flashcard question={card.get('question')} answer={card.get('answer')} key={card.get('key')} /> ) }
      </div>
    )
  }
}
export default FCD_CardList;

