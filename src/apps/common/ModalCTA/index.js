import React, {Component, Fragment} from 'react';
import Modal from '../Modal';
import {Button} from '../../../platform/components';

const TargettedElement = (props) => {  
  const {targetElementType, targetElementLabel, targetElementClasses, targetElementIcon:TargetElementIcon } = props; 

  switch(targetElementType) {
    case 'link': 
      return (
        <a href="#" onClick={props.handleShowModal} className={targetElementClasses}>
          {targetElementLabel}
        </a>
      )  
    case 'linkWithIcon': 
      return (
        <a href="#" onClick={props.handleShowModal} className={targetElementClasses}>        
          <TargetElementIcon />
          {targetElementLabel}
        </a>
      )     
    case 'button': 
      return (
        <Button 
          handleClick={props.handleShowModal} 
          classes={targetElementClasses} 
          buttonLabel={targetElementLabel} />
      )
    default:
      return (
        <a href="#" onClick={props.handleShowModal} className={props.targettedClasses}>        
            {targetElementLabel}
        </a>
      )
  }  
}

class ModalCTA extends Component {
  constructor(props) {
    super(props);    
    this.state = {showModal: false};
  }

  handleShowModal = (e) => {
    e.preventDefault();
    this.setState({showModal: true})
  }

  handleCloseModal = () => {    
    this.setState({showModal: false})
  }

  render() {
    return(
      <Fragment>    
        <TargettedElement handleShowModal={this.handleShowModal} {...this.props} />
        {(this.state.showModal) && 
          <Modal handleCloseModal={this.handleCloseModal}>
            {this.props.children}
          </Modal>
        }
      </Fragment>
    )
  }
}


export default ModalCTA