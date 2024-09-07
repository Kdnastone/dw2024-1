import React from "react";
import '../../styles/atoms/input.css';

const Input = ({ type = "text", value, onChange, placeholder, className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
  />
);

export default Input;