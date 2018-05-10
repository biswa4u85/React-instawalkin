import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form } from 'reactstrap';

class ModalForms extends React.Component {
  constructor(props) {
    super(props);
    
  }

 

  render() {
    return (
      <div>
        
        <Modal isOpen={this.props.modal}  toggle={this.props.toggle} backdrop >
          <ModalHeader >{this.props.modaltitle}</ModalHeader>
          <ModalBody >
         
          
            {this.props.modalmessage}
            
          </ModalBody>
          <ModalFooter>
          <Button className="btn btn-info button-insta big" onClick={this.props.afterFormSubmit} >Get Started</Button>
            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalForms;