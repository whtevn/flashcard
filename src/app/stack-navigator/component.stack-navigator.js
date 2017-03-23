import React from 'react'
import Layout from 'material-ui/Layout';
import FCD_StackList from '../stack-list';
import FCD_Viewer from '../viewer';

class FCD_StackNavigator extends React.Component {
  render (){
    return (
      <div>
        < FCD_StackList />
        < FCD_Viewer />
      </div>
    )
  }
}
export default FCD_StackNavigator;

