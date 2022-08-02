import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Expenses.css';
import { connect } from 'react-redux';

class Expenses extends Component {
  render() {
    const { expenses } = this.props;
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
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps, null)(Expenses);
