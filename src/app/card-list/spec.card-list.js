import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {default as Component} from './component.card-list';
import * as Container from './container.card-list';
import FCD_CardList, { initialState } from './';
import { List, Map, fromJS } from 'immutable';
import { Reducer } from './reducer.card-list';
import * as Actions from './actions.card-list';
const mockFn = jest.fn();

describe("The card list", ()=>{
  let cardList;
  let store;
  beforeEach(()=>{
    cardList = List()
                  .push(Map({question: "q 1", key: 0, answer: "a 1"}))
                  .push(Map({question: "q 2", key: 1, answer: "a 2"}))
                  .push(Map({question: "q 3", key: 2, answer: "a 3"}))
                  .push(Map({question: "q 4", key: 3, answer: "a 4"}))
                  .push(Map({question: "q 5", key: 4, answer: "a 5"}))
    store = createStore(Reducer, {cards: cardList});
  })

  describe("component", ()=>{
    test('Card list renders correctly', () => {
      const tree = renderer.create(
            <Provider store={store}>
              <MuiThemeProvider>
                <Component cards={cardList} onSelect={()=>{}} />
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
        state = { cards: fromJS({data: {cards: cardList, selected}}) };
        props = Container.mapStateToProps(state)
      })
      it("should set the cards", ()=>{
        expect(props.cards).toBe(cardList)
      })

      it("should set the selected", ()=>{
        expect(props.selected).toBe(selected)
      })
    })

    describe('mapping dispatch to props', ()=>{
      beforeEach(()=>{
        props = Container.mapDispatchToProps(mockFn)
        props.onSelect(selected, cardList)
      })
      afterEach(() => {
        mockFn.mockClear();
      })
      describe("when a card is selected", ()=>{
        it("should dispatch the select action", ()=>{
          expect(mockFn.mock.calls).toMatchSnapshot()
        })
      })
    })
  })

  xdescribe("reducer", ()=>{
    let state, action, next, selected;
    describe('CardList', ()=>{
      beforeEach(()=>{
        selected = 100;
        state = fromJS({data: {cards: cardList, selected: 0}});
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

