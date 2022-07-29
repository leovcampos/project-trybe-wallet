import { ADD_CURRENCY, REMOVE_EXPENSE, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  idCounter: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload, id }) => {
  switch (type) {
  case ADD_CURRENCY:
    return {
      ...state,
      currencies: payload,
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      xpenses: [...state.expenses, payload],
      idCounter: state.idCounter + 1,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id: expenseId }) => expenseId !== id),
    };
  default:
    return state;
  }
};

export default wallet;
