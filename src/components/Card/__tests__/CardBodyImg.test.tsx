import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import CardBodyImg from '../CardBodyImg';
import mainTheme from '../../../common/mainTheme';

test('renders with correct styles', () => {
    const tree = renderer.create(<CardBodyImg theme={mainTheme}>hi test</CardBodyImg>).toJSON();
    expect(tree).toMatchSnapshot();
});
