import { UPDATE_SPLASH_CONTENT } from './splash.actions';

const initialState = {
  splashTitle: 'Bill Buddy',
  splashSubtitle: 'A React App for Tracking Bills and Expenses.',
};

const splashReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SPLASH_CONTENT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default splashReducer;
