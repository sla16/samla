import { TEST } from './../actions/test';

let initialState = { test: 'test' };

const test = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, {message: 'A+' });
    default:
      return state;
  }
};

export default test;