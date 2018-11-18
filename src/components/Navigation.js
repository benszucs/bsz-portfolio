import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Links from './Links';

const customStyles = {
  content : {
    width: '100%',
    height: '100%',
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    border: "none",
    background: "#fff",
    borderRadius: "0",
    outline: "none",
    padding: "0",
  }
};

Modal.setAppElement(document.getElementById('root'))

export default class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return(
      <div className="navbar">
        <h1><Link className="title__color-trans" to="/">BEN SZUCS</Link></h1>
        <span className="narvbar--burger title__color-trans" onClick={this.openModal}>
          <FontAwesomeIcon icon={['fas', 'bars']} />
        </span>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <span className="modal__close title__color-trans" onClick={this.closeModal}>
            <FontAwesomeIcon icon={['fas', 'times']} />
          </span>
          <div className="modal__links" onClick={this.closeModal}>
            <Links projects={this.props.projects} handleProjectIndex={this.props.handleProjectIndex}/>
          </div>
        </Modal>
      </div>
    );
  }
};
