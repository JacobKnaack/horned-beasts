import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.removeModal}
      >
        <Modal.Header closeButton>
          {/* "?." is an optional Property (doesn't read a property if the object is empty) */}
          <Modal.Title>{this.props.beast?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.beast?.description}</Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;