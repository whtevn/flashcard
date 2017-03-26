import React from 'react'
import { Layout } from 'material-ui';
import FCD_Editor from '../editor';
import FCD_GameForm from '../game-form';
import { RaisedButton } from 'material-ui';


class FCD_StackNavigator extends React.Component {

  render (){
    let goto, buttonText, body
    const viewing = this.props.viewing;
    const setViewing = this.props.setViewing;
    if(viewing === "navigator"){
      buttonText = "play game" ;
      body = < FCD_Editor /> ;
      goto = "game";
    }else{
      buttonText = "go to editor";
      body = < FCD_GameForm /> ;
      goto = "navigator";
    }
    return (
        <div>
          <RaisedButton onClick={ _=>setViewing(goto) } >{buttonText}</RaisedButton>
          { body }
        </div>
    )
  }
}
export default FCD_StackNavigator;

