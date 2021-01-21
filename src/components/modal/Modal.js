import React, { Component } from 'react';
import ModalContainer from "./ModalStyled";

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }


    handleKeyDown = (e) => {
        e.code === "Escape" && this.props.closeModal();
    }

    handleOnOverlayClick = (e) => {
        e.target === e.currentTarget && this.props.closeModal();
    }

    render() {
        return (
            <ModalContainer className="Overlay" onClick={this.handleOnOverlayClick}>
                <div className="Modal">
                    <img src={this.props.largeImage} alt="" />
                </div>
            </ModalContainer>
        );
    }
}

