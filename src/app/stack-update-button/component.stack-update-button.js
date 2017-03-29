import React from 'react'
import { RaisedButton } from 'material-ui';

class FCD_StackUpdateRaisedButton extends React.Component {
  render(){
    const { onSave, stackId, cards } = this.props;
    return (
      <RaisedButton onClick={ ()=>onSave({stackId, cards}) } >Update Stack</RaisedButton>
    )
  }
};
export default FCD_StackUpdateRaisedButton

