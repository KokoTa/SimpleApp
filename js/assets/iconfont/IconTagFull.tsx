/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconTagFull: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 128c0-70.7-57.3-128-128-128H693c-34 0-66.5 13.5-90.5 37.5L2.9 637.1c-1.6 1.6-1.6 4.1 0 5.7l378.4 378.4c1.6 1.6 4.1 1.6 5.7 0l599.6-599.6c24-24 37.5-56.6 37.5-90.5L1024 128z m-302.4 89.6c11.7-11.7 27.1-17.6 42.4-17.6s30.7 5.9 42.4 17.6c23.4 23.4 23.4 61.4 0 84.9-11.7 11.6-27 17.5-42.4 17.5s-30.7-5.9-42.4-17.6c-23.5-23.4-23.5-61.4 0-84.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTagFull.defaultProps = {
  size: 18,
};

IconTagFull = React.memo ? React.memo(IconTagFull) : IconTagFull;

export default IconTagFull;
