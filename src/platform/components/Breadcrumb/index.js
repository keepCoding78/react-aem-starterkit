import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumb = ({path}) => {

  let crumbs = path.split('/');

  let lastPath = '';

  crumbs = crumbs.filter(crumb => crumb !== '').map(crumb => {
    lastPath += `/${crumb}`;
    return (<Link key={lastPath} to={lastPath}> / {crumb}</Link>)
  });

  return (
    <div className="breadcrumb">
      {crumbs}
    </div>
  )
}

Breadcrumb.propTypes = {
  path: PropTypes.string,
};

Breadcrumb.defaultProps = {
  path: '',
};

export default Breadcrumb;
