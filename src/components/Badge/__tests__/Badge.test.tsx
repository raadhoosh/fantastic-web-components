import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import Badge from '../Badge';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const tree = renderer.create(<Badge theme={mainTheme} bgColor="primary">hi test</Badge>).toJSON();
    expect(tree).toHaveStyleRule('background-color', mainTheme.color.primary);
    expect(tree).toMatchSnapshot();
});
