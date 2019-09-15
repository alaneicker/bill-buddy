import { SUBMIT_LOGIN } from './login.actions';

const initialState = {
  username: '',
  password: '',
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_LOGIN:
      // Submit login logic...
    default:
      return state;
  }
};

export default loginReducer;