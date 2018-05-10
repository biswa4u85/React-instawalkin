import React, {
  Component
} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Valid, FormFeedback } from 'reactstrap';
import * as httprequest from '../axiosrequests/httprequests';
import ReactDOM from 'react-dom';
import * as validate from '../validation/formvalidation.js'
import ModalForms from './ModalForms';
import DisappearingModal from '../Modal/DisappearingModal';

export default class PartnerFrom extends Component {
  constructor() {
    super();
    this.initialState = { modal: false, visible: false, color: 'success', alertMessage: '', businessname: '', contactname: '', contactemail: '', contactphone: '', city: '', isDisabled: false, errors: { businessname: false, contactname: false, contactemail: false, contactphone: false, city: false } };

    this.state = this.initialState;
    this.onChangeValue = this.onChangeValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onAlert = this.onAlert.bind(this);
    this.afterFormSubmit = this.afterFormSubmit.bind(this);
    this.toPage = this.toPage.bind(this);
  }

  toPage() {
    window.location.href = "become-a-partner#become-a-partner-form";
  }
  onChangeValue(e) {

    this.setState({ [e.target.id]: e.target.value });
  }
  submitForm(e) {
    e.preventDefault();
    var payload = {
      businessname: this.state.businessname,
      contactname: this.state.contactname,
      contactemail: this.state.contactemail,
      contactphone: this.state.contactphone,
      city: this.state.city,
    }
    if (!this.validateForm(this.state)) {
      return;
    }

    httprequest.postRequest('/becomeapartner', payload).then(response => {
      console.log('response' + response);
      //show modal 


      this.setState(this.initialState);
      this.setState({ alertMessage: 'We have receieved your request. One of our representatives will be contacting your shortly.' });
      this.onAlert();

    }).catch(error => {

      this.setState({ color: 'danger', alertMessage: 'There has been an error on our end. Please email us at', email: 'support@instawalkin.com' });
      this.onAlert();
    });
  }
  afterFormSubmit() {


    var payload = {
      businessname: this.state.businessname,
      contactname: this.state.contactname,
      contactemail: this.state.contactemail,
      contactphone: this.state.contactphone,
      city: this.state.city,
    }
    if (!this.validateForm(this.state)) {
      return;
    }

    httprequest.postRequest('/becomeapartner', payload).then(response => {

      this.setState(this.initialState);
      this.setState({ alertMessage: 'We have receieved your request. One of our representatives will be contacting your shortly.' });
      this.toggle();
      this.onAlert();
    }).catch(error => {
      this.setState({
        color: 'danger', alertMessage: 'There has been an error on our end. Please email us at ',
        email: 'support@instawalkin.com'
      });
      this.toggle();
      this.onAlert();

    });
  }
  validateForm(e) {

    console.log('validate' + JSON.stringify());
    const errors = validate.validatePartnerFrom(e.businessname, e.contactname, e.contactphone, e.contactemail, e.city);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    console.log(JSON.stringify(errors));
    this.setState({ errors: errors, isDisabled: isDisabled });

    return !isDisabled;
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onAlert() {
    this.setState({ visible: !this.state.visible });
    setTimeout(function () {
      this.setState({ visible: false });

    }.bind(this), 5000);

  }



  render() {
    var MainForm = <div>
      <FormGroup >
        <Input type="text" valid={!this.state.errors.businessname} id='businessname' value={this.state.businessname} onChange={this.onChangeValue}
          aria-describedby="businessHelp" placeholder="Business Name" />
        <FormFeedback>  {this.state.errors.businessname ?
          'Please enter your business name' : ''}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Input type="text" valid={!this.state.errors.contactname} id="contactname" value={this.state.contactname} onChange={this.onChangeValue} aria-describedby="nameHelp" placeholder="Contact Name" />
        <FormFeedback>  {this.state.errors.contactname ?
          'Please enter your contact name' : ''}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Input type="number" valid={!this.state.errors.contactphone} id="contactphone" value={this.state.contactphone} onChange={this.onChangeValue} aria-describedby="phoneHelp" placeholder="Contact Phone 3069999999" />
        <FormFeedback>  {this.state.errors.contactphone ?
          'Please enter a valid phone number' : ''}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Input type="email" valid={!this.state.errors.contactemail} id="contactemail" value={this.state.contactemail} onChange={this.onChangeValue} aria-describedby="emailHelp" placeholder="Contact email" />
        <FormFeedback>  {this.state.errors.contactemail ?
          'Please enter a valid email' : ''}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Input type="text" valid={!this.state.errors.city} id="city" value={this.state.city} onChange={this.onChangeValue} aria-describedby="cityHelp" placeholder="City" />
        <FormFeedback>  {this.state.errors.city ?
          'Please enter your city' : ''}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Button type="SUBMIT" className="btn btn-info button-insta big d-none d-lg-block"  >Get Started</Button>
        <small id="buttonLabel" className="form-text text-muted">By proceeding, I agree that instaWalkin or its representatives may contact me by email, phone, or SMS (including by automatic telephone dialing system) at the email address or number I provide, including for marketing purposes. I have read and understand the relevant <a href="#" target="_blank"> Partner Privacy Statement</a>.</small>
      </FormGroup>
    </div>;

    var partnerForm = <div className="getstart">
      <h3><span style={{ color: '#acacac' }}>Become an</span> instaWalkin partner</h3>
      <button type="button" onClick={this.toPage} className="btn btn-info button-insta big d-block d-lg-none get-started">Get Started</button>

      <DisappearingModal
        visible={this.state.visible} onAlert={this.onAlert}
        alertMessage={this.state.alertMessage} color={this.state.color} />

      <Form onSubmit={this.submitForm} className="d-none d-lg-block" role="form"  >
        {MainForm}

      </Form>
    </div>;


    return (<div>{partnerForm}</div>);
  }
}

if (document.getElementById('partnerForm')) {
  ReactDOM.render(<PartnerFrom />, document.getElementById('partnerForm'));
}