import { fromJS } from 'immutable';

export const initialState = fromJS({
  data: {
    stacks: [],
    selected: undefined
  }
})

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

  }
}
