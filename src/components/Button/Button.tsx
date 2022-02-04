import React from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'submit' | 'button';
}

const Button: React.FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
