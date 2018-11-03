import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import H3 from '../H3';
import mainTheme from '../../../../common/mainTheme';

test('renders with correct styles', () => {
    const h3 = renderer.create(<H3 theme={mainTheme} success >ok</H3>).toJSON();
    expect(h3).toMatchSnapshot();
});
