import React from 'react'
import FCD_StackListElement from '../stack-list-element';

class FCD_StackList extends React.Component {
  render (){
    const stacks = this.props.stacks;
    const onSelect = this.props.onSelect;
    return (
      <div >
        { stacks.map((stack) => < FCD_StackListElement name={stack.get('name')} id={stack.get('key')} key={stack.get('key')} onSelect={ onSelect } cards={stack.get('cards')} /> ) }
      </div>
    )
  }
}
export default FCD_StackList;

