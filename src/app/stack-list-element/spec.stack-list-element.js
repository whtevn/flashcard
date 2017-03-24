import renderer from 'react-test-renderer';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FCD_StackListElement from './component.stack-list-element.js';
import { List } from 'immutable';

test('stack list element renders correctly', () => {
  const tree = renderer.create(
      <MuiThemeProvider>
        <FCD_StackListElement name="element name" onSelect={()=>{}} cards={List()} id={0} />
      </MuiThemeProvider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});

