import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import Label from '../Label';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const lbl = renderer.create(<Label theme={mainTheme} success >ok</Label>).toJSON();
    expect(lbl).toMatchSnapshot();
});
