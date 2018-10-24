import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import Button from '../Button';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const btn = renderer.create(<Button theme={mainTheme} danger />).toJSON();
    expect(btn).toHaveStyleRule('background-color', mainTheme.color.danger);
    expect(btn).not.toHaveStyleRule('color', mainTheme.color.danger_dark);
    expect(btn).toMatchSnapshot();
});
