import React from 'react'
import Button from 'material-ui/Button';

class FCD_StackUpdateButton extends React.Component {
  render(){
    const { onSave, stackId, cards } = this.props;
    return (
      <Button raised contrast onClick={ ()=>onSave({stackId, cards}) } >Update Stack</Button>
    )
  }
};
export default FCD_StackUpdateButton

