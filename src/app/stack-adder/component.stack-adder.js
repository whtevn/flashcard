import React from 'react'
import Button from 'material-ui/Button';

class FCD_StackAdder extends React.Component {
  render (){
    return (
      <form>
        <input type="text" name="name" placeholder="stack name" />
        <Button raised onClick={ ()=> this.props.onCreate("name", "id") }>Create Stack</Button>
      </form>
    )
  }
}
export default FCD_StackAdder;


