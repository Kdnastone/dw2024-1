import React from "react";
import '../../styles/atoms/button.css';

const Button = ({ text, onclick, className }) => {
    return (
      <button className={className} onClick={onclick}>
        {text}
      </button>
    );
  };
  
export default Button;