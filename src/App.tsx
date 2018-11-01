import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import mainTheme from './common/mainTheme';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          s
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
