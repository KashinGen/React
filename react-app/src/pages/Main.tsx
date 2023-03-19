import React from 'react';

interface State {
  
}

class Main extends React.Component<Record<string, never>, State> {
  state = {};
  render() {
    return (
      <div>
        <h1>Main</h1>
      </div>
    );
  }
}

export default Main;
