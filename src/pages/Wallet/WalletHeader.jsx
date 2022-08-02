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
              00,00
              {
                //criar um reduce com todas as despesas
                //converter o valor digitado com a cotação da moeda escolhida
                //acc + valor * valorMoeda
              }
            </Span>
            <Span data-testid="header-currency-field"> BRL</Span>
          </InfoText>
        </HeaderInfo>
      </Header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({
  user: { email },
}) => ({
  email,
});

export default connect(mapStateToProps, null)(WalletHeader);
