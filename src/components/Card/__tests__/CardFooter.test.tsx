import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import CardFooter from '../CardFooter';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const tree = renderer.create(<CardFooter theme={mainTheme} primary>hi test</CardFooter>).toJSON();
    // expect(tree).toHaveStyleRule('background-color', mainTheme.color.primary);
    // expect(tree).toHaveStyleRule('color', mainTheme.color.primary_dark);
    expect(tree).toMatchSnapshot();
});
