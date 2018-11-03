import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import H2 from '../H2';
import mainTheme from '../../../../common/mainTheme';

test('renders with correct styles', () => {
    const h2 = renderer.create(<H2 theme={mainTheme} success >ok</H2>).toJSON();
    expect(h2).toMatchSnapshot();
});
