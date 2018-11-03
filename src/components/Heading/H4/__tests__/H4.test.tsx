import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import H4 from '../H4';
import mainTheme from '../../../../common/mainTheme';

test('renders with correct styles', () => {
    const h4 = renderer.create(<H4 theme={mainTheme} success >ok</H4>).toJSON();
    expect(h4).toMatchSnapshot();
});
