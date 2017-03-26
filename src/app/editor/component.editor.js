import React from 'react'
import FCD_StackList from '../stack-list';
import FCD_CardList from '../card-list';
import FCD_StackAdder from '../stack-adder';
import FCD_StackUpdateButton from '../stack-update-button';
import FCD_CardAdder from '../card-adder';

class FCD_Editor extends React.Component {
  render (){
    return (
      <div>
        < FCD_StackAdder />
        < FCD_StackList />
        < FCD_CardList />
        < FCD_CardAdder />
        < FCD_StackUpdateButton />
      </div>
    )
  }
}
export default FCD_Editor;

