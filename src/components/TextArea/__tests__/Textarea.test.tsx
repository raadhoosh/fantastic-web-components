import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import Textarea from '../TextArea';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const inp = renderer.create(<Textarea theme={mainTheme} small />).toJSON();
    expect(inp).toMatchSnapshot();
});
