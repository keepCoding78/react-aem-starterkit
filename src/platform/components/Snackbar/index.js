import React from 'react';
import { MdClose } from 'react-icons/lib/md';
import PropTypes from 'prop-types';

const CloseIcon = () => <MdClose classname="close-icon" />

const Snackbar = (props) => {
  let { showCloseButton } = props;
  return (
    <div className={ `snackbar ${props.type}` } onClick={ props.onCloseClick } >
      <div className="snackbar__content">
        <p>{ props.msg }</p>
      </div>
      { showCloseButton && 
          <div className="snackbar__close" >
            <CloseIcon />
          </div> 
      }
    </div> 

  )
};

const Type = {
  INFO: 'info',
  CAUTION: 'caution',
  ALERT: 'alert',
}

const noop = () => {};

Snackbar.propTypes = {
  msg: PropTypes.string,
  showCloseButton: PropTypes.bool,
  onCloseClick: PropTypes.func,
  type: PropTypes.oneOf(Object.keys(Type).map(key => Type[key])).isRequired,
};

Snackbar.defaultProps = {
  msg: 'Message Here',
  showCloseButton: true,
  onCloseClick: noop,
  type: Type.INFO
};

export {
  Snackbar as default,
  Type
};
