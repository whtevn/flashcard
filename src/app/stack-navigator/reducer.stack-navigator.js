import { combineReducers } from 'redux'
import { Reducer as stackListReducer, initialState as stackListState } from '../stack-list/reducer.stack-list';
import { Reducer as viewerReducer, initialState as viewerState } from '../viewer/reducer.viewer';
import { reducer as form } from 'redux-form';

export const initialState = {
  stacks: stackListState,
  viewer: viewerState
}

export const Reducer = combineReducers({stacks: stackListReducer, viewer: viewerReducer, form})
