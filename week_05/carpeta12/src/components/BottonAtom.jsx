import React from 'react';

const ButtonAtom = ({ label, onClick, icon }) => {
  return (
    <button className="btn" onClick={onClick} aria-label={label}>
      {icon && <img src={icon} alt={`${label} Icon`} />}
      {label}
    </button>
  );
};

export default ButtonAtom;
//Ok