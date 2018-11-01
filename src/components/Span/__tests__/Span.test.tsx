import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import Span from '../Span';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const lbl = renderer.create(<Span theme={mainTheme} success >ok</Span>).toJSON();
    expect(lbl).toMatchSnapshot();
});
