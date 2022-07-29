export const USER_LOG = 'USER_LOG';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const ADD_CURRENCY = 'ADD_CURRENCY';

export const addCurrencies = (payload) => ({
  type: ADD_CURRENCY,
  payload,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});

export const saveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export const userLog = (payload) => ({
  type: USER_LOG,
  payload,
});

export const getExpense = (expenseObj) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchange = await response.json();
    const newExpense = {
      ...expenseObj,
      exchange,
    };
    dispatch(saveExpense(newExpense));
  } catch (error) {
    console.error(error);
  }
};
