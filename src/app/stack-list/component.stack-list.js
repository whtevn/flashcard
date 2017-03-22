import React from 'react'
import Layout from 'material-ui/Layout';
import FCD_StackListElement from '../stack-list-element';

const FCD_StackList = ( { stacks } ) => {
  return (
    <Layout >
      { stacks.map((stack) => < FCD_StackListElement name={stack.get('name')} key={stack.get('key')} /> ) }
    </Layout>
	)
};
export default FCD_StackList;

