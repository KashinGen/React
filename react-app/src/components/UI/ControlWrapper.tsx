import React from 'react';

import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

interface ControlWrapperProps {
  error: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  errorText?: string;
  label: string;
  children: React.ReactNode;
}

const ControlWrapper = ({ children, label, errorText, error }: ControlWrapperProps) => {
  return (
    <div className="control-wrapper">
      <label>
        {label}
        {children}
      </label>
      {error && <span className="control-wrapper__error">{errorText}</span>}
    </div>
  );
};

export default ControlWrapper;
