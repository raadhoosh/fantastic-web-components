import styled from '../../common/styled';
import * as React from 'react';
/**
 *  properties
 */
interface IProps {
  src?: string,
  theme?: any;
}

const EmImg = styled('img')(
  (props: (IProps)) => {
    const css = {
      'border': `1px solid ${props.theme.color.primary}`,
    };
    return css;
  }
);

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const img = (props: IProps) => {

  return (
    <EmImg {...props} />
  );
};

export default img;
