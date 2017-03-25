import renderer from 'react-test-renderer';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FCD_Answer from './component.answer.js';

test('Flash card answer renders correctly', () => {
  const tree = renderer.create(
      <MuiThemeProvider>
        <FCD_Answer message="answer" onCorrect={()=>{}} onIncorrect={()=>{}}  />
      </MuiThemeProvider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
