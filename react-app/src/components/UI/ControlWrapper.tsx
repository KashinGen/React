import React from 'react';

interface ControlWrapperProps {
  error: boolean;
  errorText?: string;
  label: string;
  children: React.ReactNode;
}

class ControlWrapper extends React.Component<ControlWrapperProps, Record<string, never>> {
  render() {
    const { children, label, errorText, error } = this.props;
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
}

export default ControlWrapper;
