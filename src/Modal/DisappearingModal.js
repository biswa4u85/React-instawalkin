import React from 'react';
import { Alert } from 'reactstrap';

class DisappearingModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (

      <Alert className="disappearingAlert" color={this.props.color} isOpen={this.props.visible} toggle={this.props.onAlert}>
        {this.props.alertMessage} <a href="mailto:{this.props.email}">{this.props.email}</a>
      </Alert>

    );
  }
}

export default DisappearingModal;

