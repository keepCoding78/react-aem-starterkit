import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles/index.css'

// Tabs array format
// label: Title of the tab
// url: url to route to on click

const Tabs = ({ tabs, activeTab, baseURL }) => (
  <div className="tabs">
    <ul>{
      Object.keys(tabs).map((key, index, value) => <li key={index} className={index === activeTab ? 'tabActive' : 'tabInactive'}>
        <Link className="arrow" to={`${baseURL}/${key}`}>{key}</Link>
      </li>
    )}
    </ul>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.object.isRequired,
  activeTab: PropTypes.number
}

export default Tabs;
