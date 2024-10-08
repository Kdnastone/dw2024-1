import React from 'react';
import './button.css';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="refresh">
      {text}
    </button>
  );
};

export default Button