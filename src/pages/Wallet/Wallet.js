import React from 'react';
import WalletForm from '../../components/WalletForm/WalletForm';
import WalletHeader from './WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletForm />
      </div>
    );
  }
}

export default Wallet;
