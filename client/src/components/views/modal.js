import React, { Component } from 'react';
import './modal.css';
import MyModal from './mymodal';
import ModalPortal from './ModalPortal'

export default class modal extends Component {
    state = {
        modal: false
      };
      handleOpenModal = () => {
        this.setState({
          modal: true
        });
      };
      handleCloseModal = () => {
        this.setState({
          modal: false
        });
      };
  render() {
    return (
        <div className="App">
        <h1>안녕하세요 리액트!</h1>
        <button onClick={this.handleOpenModal}>모달 열기</button>
        {this.state.modal && (
          <ModalPortal>
            <MyModal onClose={this.handleCloseModal} />
          </ModalPortal>
        )}
      </div>
    );
  }
}

