import * as React from 'react';
import './App.css';

import Button from './components/Button/Button';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button label="Ok" />
      </div>
    );
  }
}

export default App;
