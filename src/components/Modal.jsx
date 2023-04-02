import React from 'react';
import '../styles/modal.scss'
import {CloseIcon} from "./icons";
import {useEscapeKeyPress} from "../hooks/useEscapeKeyPress";

const Modal = ({ isOpen, onClose, children }) => {
    useEscapeKeyPress(onClose);
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal-content">
                {children}
                <button className="modal-close" onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};

export default Modal;