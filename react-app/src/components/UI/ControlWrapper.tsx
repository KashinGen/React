import React from 'react';

interface ControlWrapperProps {
  error: boolean;
  errorText?: string;
  label: string;
  children: React.ReactNode;
}

const ControlWrapper =  ({ children, label, errorText, error }: ControlWrapperProps) => {
    return (
      <div className="control-wrapper">
        <label>
          {label}
          {children}
        </label>
        {error && <span className="control-wrapper__error">{errorText}</span>}
      </div>
    );
}

export default ControlWrapper;
