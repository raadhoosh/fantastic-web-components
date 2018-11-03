import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import H5 from '../H5';
import mainTheme from '../../../../common/mainTheme';

test('renders with correct styles', () => {
    const h5 = renderer.create(<H5 theme={mainTheme} success >ok</H5>).toJSON();
    expect(h5).toMatchSnapshot();
});
