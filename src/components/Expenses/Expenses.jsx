import React, { Component } from 'react';
import './Expenses.css';
import { connect } from 'react-redux';

class Expenses extends Component {
  render() {
    // const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>value</th>
            <th>description</th>
            <th>currency</th>
            <th>method</th>
            <th>tag</th>
            <th>exchangeRates</th>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps, null)(Expenses);
