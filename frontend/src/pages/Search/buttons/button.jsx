import React from "react";
import './button.css';

function Button(props) {
    return (
        <>
            <button class="button">
            <span>{props.text}</span>
            </button>
        </>
    );
    }
export default Button;