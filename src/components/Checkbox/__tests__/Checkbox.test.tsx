import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import Checkbox from '../Checkbox';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const inp = renderer.create(<Checkbox theme={mainTheme} disabled />).toJSON();
    expect(inp).toMatchSnapshot();
});
