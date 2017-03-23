import React from 'react'

const FCD_StackListElement = ( { name, id, onSelect } ) => {
  return (
    <div>
      <a href="#" onClick={ ()=>onSelect(id) }> { name } </a>
    </div>
	)
};
export default FCD_StackListElement;

