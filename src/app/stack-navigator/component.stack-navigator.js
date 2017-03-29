import React from 'react'
import { Layout } from 'material-ui';
import FCD_Editor from '../editor';
import FCD_GameForm from '../game-form';
import FCD_Viewer from '../viewer';
import { RaisedButton } from 'material-ui';


class FCD_StackNavigator extends React.Component {
  componentDidMount() {
    const search = location.search.substring(1);
    if(search==='') return
    const queryObject = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    console.log(
			queryObject.cards,
			queryObject.stackName,
			queryObject.perspective,
			queryObject.pin
    );

		// dispatch(GameActions.Load(fromJs(queryObject)))
  }

  render (){
    let goto, buttonText, body
    const viewing = this.props.viewing;
    const setViewing = this.props.setViewing;
    if(viewing === "navigator"){
      buttonText = "play game" ;
      body = < FCD_Editor /> ;
      goto = "game";
    }else{
      const game = this.props.game;
      if(game){
        buttonText = "quit game";
        body = < FCD_Viewer />  ;
        goto = "quit";
      }else{
        buttonText = "go to editor";
        body = < FCD_GameForm />
        goto = "navigator";
      }
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

