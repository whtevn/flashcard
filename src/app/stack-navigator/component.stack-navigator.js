import React from 'react'
import { Layout } from 'material-ui';
import FCD_Editor from '../editor';
import FCD_GameForm from '../game-form';
import FCD_Viewer from '../viewer';
import { RaisedButton } from 'material-ui';
import { fromJS } from 'immutable';


class FCD_StackNavigator extends React.Component {
  componentDidMount() {
    const search = location.search.substring(1);
    if(search==='') return
    const queryObject = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    this.props.startGame({
      cards: fromJS(JSON.parse(atob(decodeURIComponent(queryObject.cards)))),
			stackName: queryObject.stackName,
			perspective: queryObject.perspective,
			pin: queryObject.pin,
      selected: 0
    });

		// dispatch(GameActions.Load(fromJs(queryObject)))
  }

  render (){
    let goto, buttonText, body
    const viewing = this.props.viewing;
    const setViewing = this.props.setViewing;
    switch(viewing){
      case "game":
        buttonText = "quit game";
        body = < FCD_Viewer />  ;
        goto = "quit";
        break;
      case "game-form":
        buttonText = "go to editor";
        body = < FCD_GameForm />
        goto = "navigator";
        break;
      case "navigator":
      default:
        buttonText = "play game" ;
        body = < FCD_Editor /> ;
        goto = "game-form";
        break;
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

