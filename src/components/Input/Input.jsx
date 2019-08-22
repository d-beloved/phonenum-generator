import React from 'react';

const InputBox = ({type, error, placeholder, name, className, onChange}) => (
  <input
    type={type}
    error={error}
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    name={name}
  />
);

export default InputBox;
