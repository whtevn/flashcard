import renderer from 'react-test-renderer';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FCD_Flashcard from './component.flashcard.js';

test('Full flash card renders correctly', () => {
  const tree = renderer.create(
      <MuiThemeProvider>
        <FCD_Flashcard answer="answer" question="question" onCorrect={()=>{}} onIncorrect={()=>{}}  />
      </MuiThemeProvider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});

