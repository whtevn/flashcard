import React from 'react'
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';

const FCD_Answer = ( { message, onCorrect, onIncorrect } ) => {
  return (
		<Layout container>
			<Layout item xs={12}>
				<Layout
					container
					justify="center"
				>
					{ message }
					<Button raised contrast onClick={ onIncorrect} >Incorrect</Button>
					<Button raised onClick={ onCorrect} >Correct</Button>
				</Layout>
			</Layout>
		</Layout>
	)
};
export default FCD_Answer;

