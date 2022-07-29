import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from '../../components/Image';
import logo from '../../images/trybeWalletLogo.png';
import HeaderInfo from '../../components/HeaderInfo';
import InfoText from '../../components/InfoText';
import Header from '../../components/Header';
import Span from '../../components/FormComponents/Span';

class WalletHeader extends React.Component {
  // totalExpenses = () => {
  //   const { expenses } = this.props;
  //   expenses.reduce((acc, {
  //     value,
  //     currency,
  //     exchange,
  //   }) => acc + (Number(exchange[currency].ask) * value), 0);
  // };

  render() {
    const { email } = this.props;
    return (
      <Header>
        <Image
          src={ logo }
          width="100px"
        />
        <HeaderInfo>
          <InfoText
            data-testid="email-field"
          >
            {`Email: ${email}`}
          </InfoText>
          <InfoText>
            Despesa Total: R$
            {' '}
            <Span data-testid="total-field">
              0
            </Span>
            <Span data-testid="header-currency-field">BRL</Span>
          </InfoText>
        </HeaderInfo>
      </Header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({
  user: { email },
  wallet: { expenses },
}) => ({
  email,
  expenses,
});

export default connect(mapStateToProps, null)(WalletHeader);
