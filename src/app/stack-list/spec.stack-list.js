import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {default as Component} from './component.stack-list';
import * as Container from './container.stack-list';
import FCD_StackList, { initialState } from './';
import { List, Map, fromJS } from 'immutable';
import { Reducer } from './reducer.stack-list';
import * as Actions from './actions.stack-list';
const mockFn = jest.fn();

describe("The stack list", ()=>{
  let stackCards;
  let stackList;
  let store;
  beforeEach(()=>{
    stackCards = List()
                  .push(Map({question: "q 1", answer: "a 1"}))
                  .push(Map({question: "q 2", answer: "a 2"}))
                  .push(Map({question: "q 3", answer: "a 3"}))
                  .push(Map({question: "q 4", answer: "a 4"}))
                  .push(Map({question: "q 5", answer: "a 5"}))
    stackList = fromJS([
      {name: 'first stack' , key: 0, cards: stackCards },
      {name: 'second stack', key: 1, cards: stackCards },
      {name: 'third stack' , key: 2, cards: stackCards },
      {name: 'fourth stack', key: 3, cards: stackCards },
      {name: 'fifth stack' , key: 4, cards: stackCards }
    ])
    store = createStore(Reducer, {stacks: stackList});
  })

  describe("component", ()=>{
    test('Stack list renders correctly', () => {
      const tree = renderer.create(
            <Provider store={store}>
              <MuiThemeProvider>
                <Component stacks={stackList} onSelect={()=>{}} />
              </MuiThemeProvider>
            </Provider>
          ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  })

  describe("container", ()=>{
    let state, props, selected;
    beforeEach(()=>{
      selected = 0;
    })
    describe('mapping state to props', ()=>{
      beforeEach(()=>{
        state = { stacks: fromJS({data: {stacks: stackList, selected}}) };
        props = Container.mapStateToProps(state)
      })
      it("should set the stacks", ()=>{
        expect(props.stacks).toBe(stackList)
      })

      it("should set the selected", ()=>{
        expect(props.selected).toBe(selected)
      })
    })

    describe('mapping dispatch to props', ()=>{
      beforeEach(()=>{
        props = Container.mapDispatchToProps(mockFn)
        props.onSelect(selected, stackCards)
      })
      afterEach(() => {
        mockFn.mockClear();
      })
      describe("when a stack is selected", ()=>{
        it("should dispatch the select action", ()=>{
          expect(mockFn.mock.calls).toMatchSnapshot()
        })
      })
    })
  })

  describe("reducer", ()=>{
    let state, action, next, selected;
    describe('StackList', ()=>{
      beforeEach(()=>{
        selected = 100;
        state = fromJS({data: {stacks: stackList, selected: 0}});
        action = { type: Actions.SELECT, payload: fromJS({ selected }) }
        next  = Reducer(state, action);
      })
      describe("::SELECT", ()=>{
        it("should read the selected id from the payload and set it in the state", ()=>{
          expect(next.getIn(['data', 'selected'])).toBe(selected);
        })
      })
    })
  })
})

