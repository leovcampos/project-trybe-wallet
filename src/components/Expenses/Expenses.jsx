import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Expenses.css';
import { connect } from 'react-redux';
import Button from '../FormComponents/Button';
import { removeExpense, editExpenses } from '../../redux/actions';

class Expenses extends Component {
  render() {
    const { expenses, delExpense, editButton } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(({
              description,
              tag,
              method,
              value,
              exchangeRates,
              id,
              currency,
            }) => (
              <tr
                key={ id }
              >
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Math.round(exchangeRates[currency].ask * 100) / 100}</td>
                <td>
                  {Math.round((value * Number(exchangeRates[currency].ask) * 100)) / 100}
                </td>
                <td>Real</td>
                <td>
                  <Button
                    type="button"
                    onClick={ () => editButton(id) }
                    data-testid="edit-btn"
                    backColor="#19d175"
                    color="black"
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    onClick={ () => delExpense(id) }
                    data-testid="delete-btn"
                    backColor="rgb(79, 00, 10)"
                    color="white"
                  >
                    Delet
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  delExpense: PropTypes.func.isRequired,
  editButton: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (id) => dispatch(removeExpense(id)),
  editButton: (id) => dispatch(editExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
