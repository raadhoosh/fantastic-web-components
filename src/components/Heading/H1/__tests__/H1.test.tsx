import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import H1 from '../H1';
import mainTheme from '../../../../common/mainTheme';

test('renders with correct styles', () => {
    const h1 = renderer.create(<H1 theme={mainTheme} success >ok</H1>).toJSON();
    expect(h1).toMatchSnapshot();
});
