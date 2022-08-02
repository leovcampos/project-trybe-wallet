import React from 'react';
import Expenses from '../../components/Expenses/Expenses';
import WalletForm from '../../components/WalletForm/WalletForm';
import WalletHeader from './WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletForm />
        <Expenses />
      </div>
    );
  }
}

export default Wallet;
