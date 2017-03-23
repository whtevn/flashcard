import { fromJS } from 'immutable';
import { combineReducers } from 'redux'
import { Reducer as stackListReducer, initialState as stackListState } from '../stack-list/reducer.stack-list';
import { Reducer as viewerReducer, initialState as viewerState } from '../viewer/reducer.viewer';

export const Reducer = combineReducers({stack: stackListReducer, viewer: viewerReducer})

export const initialState = {
  stack: stackListState,
  viewer: viewerState
}
