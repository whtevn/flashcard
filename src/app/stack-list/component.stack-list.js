import React from 'react'
import Layout from 'material-ui/Layout';
import FCD_StackListElement from '../stack-list-element';

class FCD_StackList extends React.Component {
  render (){
    const stacks = this.props.stacks;
    return (
      <Layout >
        { stacks.map((stack) => < FCD_StackListElement name={stack.get('name')} key={stack.get('key')} /> ) }
      </Layout>
    )
  }
}
export default FCD_StackList;

