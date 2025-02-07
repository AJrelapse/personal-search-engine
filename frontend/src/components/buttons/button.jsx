import React from 'react';
import './button.css';

function Button({ text, isActive }) {
    return (
        <button className={`button ${isActive ? 'active' : ''}`}>
            <span>{text}</span>
        </button>
    );
}

export default Button;
