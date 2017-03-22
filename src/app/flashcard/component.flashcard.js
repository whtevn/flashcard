import React from 'react'
import Layout from 'material-ui/Layout';
import FCD_Answer from '../answer'
import FCD_Question from '../question'

class FCD_Flashcard extends React.Component {
  render (){
    const question=this.props.question;
    const answer=this.props.answer;
    const onCorrect=this.props.onCorrect;
    const onIncorrect=this.props.onIncorrect;
    return <Layout container>
      <Layout item xs={12}>
        <FCD_Question
          message={ question } />
      </Layout>
      <Layout item xs={12}>
        <FCD_Answer
          message={ answer }
          onCorrect={ onCorrect }
          onIncorrect={ onIncorrect } />
      </Layout>
    </Layout>
	}
};
export default FCD_Flashcard;


