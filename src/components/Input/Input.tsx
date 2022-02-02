import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ children, className, name, ...rest }) => {
  return (
    <div className={className}>
      {children}
      {!children && (
        <label htmlFor={name}>
          <input name={name} {...rest} />
        </label>
      )}
    </div>
  );
};

export default Input;
