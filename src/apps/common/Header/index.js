import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from '../../../platform/components/';

const Header = (props) => {

  let {pathname} = props.location;

  return (
    <header className="header header-wrapper">
      <Breadcrumb path={pathname} />
      { /* future header notifcations will go here */ } 
    </header>
  )
}

Header.propTypes = {
  pathname: PropTypes.string,
};

Header.defaultProps = {
  pathname: '',
};

export default withRouter(Header);
