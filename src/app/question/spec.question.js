import renderer from 'react-test-renderer';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FCD_Question from './component.question.js';

test('Flash card question renders correctly', () => {
  const tree = renderer.create(
      <MuiThemeProvider>
        <FCD_Question message="question" />
      </MuiThemeProvider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
