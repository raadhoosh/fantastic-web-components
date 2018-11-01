import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import Img from '../Img';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const img = renderer.create(<Img theme={mainTheme} />).toJSON();
    expect(img).toMatchSnapshot();
});
