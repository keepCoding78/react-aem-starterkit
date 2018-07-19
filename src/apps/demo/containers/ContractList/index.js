import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContractList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contracts: [
        {
          title: 'Johnson Farming Inc.',
          subTitle: 'SBM',
          cakNo: '0000518638'
        },
        {
          title: 'Johnson Farming Inc.',
          subTitle: 'SBM',
          cakNo: '0000518638'
        },
        {
          title: 'Johnson Farming Inc.',
          subTitle: 'SBM',
          cakNo: '0000518638'
        }
      ]
    };
  }

  getContractCount = contracts => {
    return contracts.length;
  };

  getContractList = contracts => {
    return contracts.map((contract, i) => {
      return (
        <ul key={i}>
          <li>
            <strong>{contract.title}</strong>
            <br />
            {contract.subTitle}
            <br />
            <Link to={`${this.props.match.url}${contract.cakNo}`}>{contract.cakNo}</Link>
          </li>
        </ul>
      );
    });
  };

  render() {
    return (
      <div className="component-wrapper">
        <strong>Found {this.getContractCount(this.state.contracts)} Contracts</strong>
        {this.getContractList(this.state.contracts)}
      </div>
    );
  }
}

export default ContractList;
