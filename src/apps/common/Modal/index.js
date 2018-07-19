import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

const modalRoot = document.getElementById('modalshell');

// Based on Dan Abramov's implementation...
// Let's create a Modal component that is an abstraction around
// the portal API.
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div');
    this.el.className = 'modal';
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
    
  render() {
    return ReactDOM.createPortal(
      <Fragment>
        <div className="shroud" />
        <div className="modal-content-wrapper">           
          {React.cloneElement(this.props.children, { handleCloseModal: this.props.handleCloseModal })}
        </div>
      </Fragment>,
      this.el,
    );
  }
}

export default Modal;
