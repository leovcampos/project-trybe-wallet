import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCurrencies } from '../../redux/actions';
import Form from './Form';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';
import Label from '../FormComponents/Label';
import Select from '../FormComponents/Select';
import Span from '../FormComponents/Span';

class WalletForm extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     coins: [],
  //   };
  // }

  componentDidMount() {
    const fetchCoins = async () => {
      const { saveCurrencies } = this.props;
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const rates = await response.json();
      const returnCoins = Object.keys(rates).filter((element) => element !== 'USDT');
      saveCurrencies(returnCoins);
    };
    fetchCoins();
  }

  render() {
    const { currencies } = this.props;
    return (
      <Form>
        <Label>
          <Span>Valor:</Span>
          <Input
            data-testid="value-input"
            id="value"
            name="value"
            width="100px"
          />
        </Label>
        <Label>
          <Span>Moeda</Span>
          <Select
            data-testid="currency-input"
            id="currency"
            name="currency"
          >
            {
              currencies.map((coin) => (
                <option
                  key={ coin }
                  value={ coin }
                >
                  {coin}
                </option>
              ))
            }
          </Select>
        </Label>
        <Label htmlFor="method">
          <Span>Método de Pgto</Span>
          <Select
            data-testid="method-input"
            id="method"
            name="method"
            width="150px"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </Select>
        </Label>
        <Label htmlFor="tag">
          <Span>Tag</Span>
          <Select
            data-testid="tag-input"
            id="tag"
            name="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </Select>
        </Label>
        <Label htmlFor="description">
          <Span>Descrição</Span>
          <Input
            data-testid="description-input"
            id="description"
            name="description"
            maxLength="30"
          />
        </Label>
        <Button
          backColor="#f5f5f5"
          color="black"
          type="submit"
        >
          Adicionar despesa
        </Button>
      </Form>
    );
  }
}

WalletForm.propTypes = {
  // idCounter: PropTypes.number.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // saveExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  // saveExpense: (payload) => dispatch(getExpense(payload)),
  saveCurrencies: (payload) => dispatch(addCurrencies(payload)),
});

const mapStateToProps = ({ wallet: {
  idCounter,
  currencies,
} }) => ({
  idCounter,
  currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
