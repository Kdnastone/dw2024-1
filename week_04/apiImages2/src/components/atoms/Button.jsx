import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="refresh">
      {text}
    </button>
  );
};

export default Button