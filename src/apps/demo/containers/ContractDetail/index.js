import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContractOverview from '../../components/ContractOverview';
import ContractPayments from '../../components/ContractPayments';

class ContractDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [
        {
          label: 'Overview',
          url: 'overview',
          comp: ContractOverview
        },
        {
          label: 'Payments',
          url: 'payments',
          comp: ContractPayments
        }
      ]
    };
  }

  getTabList = tabs => {
    return tabs.map((tab, i) => {
      return (
        <ul key={i}>
          <li>
            <Link to={`${this.props.match.url}/${tab.url}`}>{tab.label}</Link>
          </li>
        </ul>
      );
    });
  };

  getRoutes = tabs => {
    return tabs.map((tab, i) => {
      return (
        <Route
            path={`${this.props.match.url}/${tab.url}`}
            component={tab.comp}
            key={i}
          />
      );
    });
  };

  render() {
    return (
      <Router>
        <Fragment>
          {this.getTabList(this.state.tabs)}
          {this.getRoutes(this.state.tabs)}
        </Fragment>
      </Router>
    );
  }
}

export default ContractDetail;
