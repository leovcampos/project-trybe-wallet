import { USER_LOG } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case USER_LOG:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
