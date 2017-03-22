import React from 'react'
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';

const FCD_Question = ( { message } ) => {
  return (
    <Layout
      container
      justify="center"
    >
      { message }
    </Layout>
	)
};
export default FCD_Question;

