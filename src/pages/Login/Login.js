import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from '../../components/FormComponents/Input';
import LoginForm from './LoginForm';
import './Login.css';
import Button from '../../components/FormComponents/Button';
import logo from '../../images/trybeWalletLogo.png';
import Image from '../../components/Image';
import { userLog } from '../../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  validateEmail = () => {
    const regex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
    const { email } = this.state;

    return !!regex.test(email);
  }

  validatePassword = () => {
    const { password } = this.state;
    const passwordLength = 6;
    return password.length >= passwordLength;
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.setState({
          isDisabled: !(this.validateEmail() && this.validatePassword()),
        });
      },
    );
  };

  handleClick = () => {
    const { history, saveLog } = this.props;
    const { email } = this.state;

    saveLog(email);
    history.push('/carteira');
  };

  render() {
    const { email, isDisabled, password } = this.state;
    return (
      <div className="Home">
        <Image
          src={ logo }
          width="200px"
        />
        <LoginForm>
          <Input
            type="email"
            placeholder="type your e-mail"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            data-testid="email-input"
          />
          <Input
            type="password"
            placeholder="type your password"
            onChange={ this.handleChange }
            name="password"
            value={ password }
            data-testid="password-input"
          />
          <Button
            type="submit"
            onClick={ this.handleClick }
            disabled={ isDisabled }
            color="white"
            backColor="rgb(04, 37, 00)"
          >
            Entrar
          </Button>
        </LoginForm>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveLog: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveLog: (email) => dispatch(userLog(email)),
});

export default connect(null, mapDispatchToProps)(Login);
