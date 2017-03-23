import React from 'react'

const FCD_StackListElement = ( { name, id, onSelect, cards } ) => {
  return (
    <div>
      <a href="#" onClick={ ()=>onSelect(id, cards) }> { name } </a>
    </div>
	)
};
export default FCD_StackListElement;

