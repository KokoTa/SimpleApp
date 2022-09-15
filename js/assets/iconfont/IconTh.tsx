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

let IconTh: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1541 1024" width={size} height={size} {...rest}>
      <Path
        d="M6.272 1017.74h1513.467V11.268H6.272V1017.74z m1515.97 3.756v-3.755 3.755zM0.012 1024V5.007h1525.986V1024H0.012z"
        fill={getIconColor(color, 0, '#353636')}
      />
      <Path
        d="M3.768 683.501h1519.726V852.5H3.768z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M3.768 852.499h1519.726v168.997H3.768z m0-844.988h1519.726v168.998H3.768z"
        fill={getIconColor(color, 2, '#D5352C')}
      />
      <Path
        d="M3.768 176.509h1519.726v168.997H3.768z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
      <Path
        d="M3.768 345.506h1519.726v337.995H3.768z"
        fill={getIconColor(color, 4, '#00458F')}
      />
    </Svg>
  );
};

IconTh.defaultProps = {
  size: 18,
};

IconTh = React.memo ? React.memo(IconTh) : IconTh;

export default IconTh;
