import React, { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
