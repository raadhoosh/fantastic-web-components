import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import mainTheme from './common/mainTheme';
import Label from './components/Label/Label';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <Label>scsacsa</Label>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
