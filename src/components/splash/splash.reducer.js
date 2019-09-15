import { UPDATE_SPLASH_CONTENT } from './splash.actions';

const initialState = {
  splashTitle: 'Bill Buddy',
  splashSubtitle: 'Bill and Expense Tracking Made Easy.',
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
