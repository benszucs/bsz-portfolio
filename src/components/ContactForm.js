import React from 'react';
import * as emailjs from 'emailjs-com';

export default class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    errors: {
      name: '',
      email: '',
      message: ''
    },
    formSubmitted: false,
  };

  handleNameChange = this.handleNameChange.bind(this);
  handleEmailChange = this.handleEmailChange.bind(this);
  handleMessageChange = this.handleMessageChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  validateMail() {
    let errors = {}
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = 'Minimum 3 characters'
      formIsValid = false
    }

    if (!this.state.email || this.state.email.length < 3) {
      errors.email = 'Minimum 3 characters'
      formIsValid = false
    }

    if (!this.state.message || this.state.message.length < 10) {
      errors.message = 'Minimum 10 characters'
      formIsValid = false
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(this.state.email)) {
      errors.email = 'This is not a valid email'
      formIsValid = false
    }

    this.setState({
      errors: errors
    })

    return formIsValid
  }

  handleSubmit(e) {
    e.preventDefault();

    // check if the form is filled out properly before processing the email
    if (!this.validateMail()) {
      return
    }

    const templateParams = {
      senderName: this.state.name,
      senderEmail: this.state.email,
      receiverEmail: 'benszucs@gmail.com',
      message: this.state.message
    }

    this.setState({
      name: '',
      email: '',
      message: ''
    });

    emailjs
      .send('gmail', 'template_912kdf8b', templateParams, "user_AB0r28OTPPcsm8mgl5hPU")
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));

    this.setState({
      formSubmitted: true
    });
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <ul>
          <li className="form--label">
            <label>Name *</label>
          </li>
          <li>
            <input
              className={"form--field" + (this.state.errors.name ? " form--error-border" : "")}
              type="text"
              name="name-entry"
              placeholder="Your Name..."
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </li>
          <li className="form--error-message">{this.state.errors.name}</li>
          <li className="form--label">
            <label>Email Address *</label>
          </li>
          <li>
            <input
              className={"form--field" + (this.state.errors.email ? " form--error-border" : "")}
              type="text"
              name="email-entry"
              placeholder="Your Email Address..."
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </li>
          <li className="form--error-message">{this.state.errors.email}</li>
          <li className="form--label">
            <label>Message *</label>
          </li>
          <li>
            <textarea
              className={"form--field form--message" + (this.state.errors.message ? " form--error-border" : "")}
              id="message-entry"
              name="message-entry"
              placeholder="Your Message..."
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </li>
          <li className="form--error-message">{this.state.errors.message}</li>
          <li>{this.state.formSubmitted && 'Email sent'}</li>
        </ul>
        <button className="button form--button" type="submit">Submit</button>
      </form>
    )
  }
}
