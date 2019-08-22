import React from 'react';

const Button = ({type, disabled, onClick, text, className}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className}
  >
    {text}
  </button>
);

export default Button;
