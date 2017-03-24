import React from 'react'
import Button from 'material-ui/Button';

class FCD_Question extends React.Component {
  render(){
    const message = this.props.message;
    return (
      <div >
        { message }
      </div>
    )
  }
};
export default FCD_Question;

