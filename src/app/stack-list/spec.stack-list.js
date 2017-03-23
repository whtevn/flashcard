import renderer from 'react-test-renderer';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FCD_StackList from './component.stack-list.js';
import { List, Map, fromJS } from 'immutable';

test('Stack list renders correctly', () => {
  const stackCards = List()
                        .push(Map({question: "q 1", answer: "a 1"}))
                        .push(Map({question: "q 2", answer: "a 2"}))
                        .push(Map({question: "q 3", answer: "a 3"}))
                        .push(Map({question: "q 4", answer: "a 4"}))
                        .push(Map({question: "q 5", answer: "a 5"}))
  const stackList = fromJS([
    {name: 'first stack' , key: 0, cards: stackCards },
    {name: 'second stack', key: 1, cards: stackCards },
    {name: 'third stack' , key: 2, cards: stackCards },
    {name: 'fourth stack', key: 3, cards: stackCards },
    {name: 'fifth stack' , key: 4, cards: stackCards }
  ])
  const tree = renderer.create(
      <MuiThemeProvider>
        <FCD_StackList stacks={stackList} onSelect={()=>{}} />
      </MuiThemeProvider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});

