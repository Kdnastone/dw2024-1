import React from "react";
import '../../styles/button.css';

const Button = ({text, onclick,className}) => {
    <button className={className} onClick={onclick}>
        {text}
    </button>
    };
export default Button;