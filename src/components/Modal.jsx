import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ title, content, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Modal;
