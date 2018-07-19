import React from 'react';
import EventManager from '../../utilities/eventManager';
import PropTypes from 'prop-types';

import './styles/index.css';

class ToastContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toast: null,
      show: true,
      open: ''
    }
  }

  componentDidMount() {

    EventManager.on('show', (content, options) => this.show(content, options))
      .on('clear', id => (id !== null ? this.removeToast(id) : this.clear()))
      .emit('mounted', this);
  }

  componentWillUnmount() {
    EventManager.off('show');
    EventManager.off('clear');
  }

  show = (content) => {
    this.setState({toast: content, open: 'open'});
    this.timer = setTimeout(() => { this.removeToast() }, this.props.autoClose)
  }

  removeToast = (id) => {
    this.clear();
  }

  clear = () => {
    clearTimeout(this.timer);
    this.setState({ open: ''})
  }
    
  render() {
    return this.state.show && <div onClick={() => { this.clear() }} className={ `toast-container ${this.state.open}`}> { this.state.toast } </div>
  }
}

ToastContainer.propTypes = {
  autoClose: PropTypes.number
};

ToastContainer.defaultProps = {
  autoClose: 3000
};

const toast = (content) => {
  EventManager.emit('show', content)
}

export {
  ToastContainer, 
  toast
} 


