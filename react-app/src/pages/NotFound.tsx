import React from 'react';

class NotFound extends React.Component<Record<string, never>, Record<string, never>> {
  state = {};
  render() {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    );
  }
}

export default NotFound;
