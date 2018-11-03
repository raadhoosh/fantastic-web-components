import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import H6 from '../H6';
import mainTheme from '../../../../common/mainTheme';

test('renders with correct styles', () => {
    const h6 = renderer.create(<H6 theme={mainTheme} success >ok</H6>).toJSON();
    expect(h6).toMatchSnapshot();
});
