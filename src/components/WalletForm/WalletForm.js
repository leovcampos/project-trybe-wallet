import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCurrencies, getExpense } from '../../redux/actions';
import Form from './Form';
import Button from '../FormComponents/Button';
import Input from '../FormComponents/Input';
import Label from '../FormComponents/Label';
import Select from '../FormComponents/Select';
import Span from '../FormComponents/Span';

class WalletForm extends Component {
  constructor() {
    super();

    this.expenseObj = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.state = this.expenseObj;
  }

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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    const { value, description, currency, method, tag } = this.state;
    const { idCounter, newExpense } = this.props;

    const expenses = {
      id: idCounter,
      value,
      description,
      currency,
      method,
      tag,
    };

    newExpense(expenses);

    this.setState(this.expenseObj);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <Form>
        <Label>
          <Span>Value:</Span>
          <Input
            data-testid="value-input"
            id="value"
            name="value"
            width="100px"
            value={ value }
            onChange={ this.handleChange }
          />
        </Label>
        <Label>
          <Span>Currency</Span>
          <Select
            data-testid="currency-input"
            id="currency"
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
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
          <Span>Payment Metod</Span>
          <Select
            data-testid="method-input"
            id="method"
            name="method"
            width="150px"
            onChange={ this.handleChange }
            value={ method }
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
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </Select>
        </Label>
        <Label htmlFor="description">
          <Span>Description</Span>
          <Input
            data-testid="description-input"
            id="description"
            name="description"
            maxLength="30"
            onChange={ this.handleChange }
            value={ description }
          />
        </Label>
        <Button
          backColor="#f5f5f5"
          color="black"
          type="button"
          onClick={ this.handleSubmit }
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
  idCounter: PropTypes.number.isRequired,
  newExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  newExpense: (payload) => dispatch(getExpense(payload)),
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
