import { ADD_CURRENCY,
  REMOVE_EXPENSE, SAVE_EXPENSE, EDIT_EXPENSES, EDIT_FINALY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  idCounter: 0,
  idToEdit: '',
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
      expenses: [...state.expenses, payload],
      idCounter: state.idCounter + 1,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id: expenseId }) => expenseId !== id),
    };
  case EDIT_EXPENSES:
    return {
      ...state,
      idToEdit: id,
    };
  case EDIT_FINALY:
    console.log(state.expenses);
    return {
      ...state,
      expenses: [...expenses, expenses[payload]],
    };
  default:
    return state;
  }
};

export default wallet;
