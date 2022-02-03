import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  hasError?: boolean;
  errorText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  children,
  className,
  name,
  onChange,
  hasError,
  errorText,
  ...rest
}) => {
  const checkError = hasError === true ? 'input--error' : '';
  return (
    <div className={`${checkError} ${className}`}>
      {children}
      {!children && (
        <label htmlFor={name}>
          <input name={name} {...rest} onChange={onChange} />
          {hasError && <p className="alert--error">{errorText}</p>}
        </label>
      )}
    </div>
  );
};

export default Input;
