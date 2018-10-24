import * as React from 'react';
import mainTheme from '../common/mainTheme';
import { ThemeProvider } from 'emotion-theming';

export default class ThemeWrapper extends React.Component {
    render() {
        return (
            <ThemeProvider theme={mainTheme}>
                {this.props.children}
            </ThemeProvider>
        );
    }
}