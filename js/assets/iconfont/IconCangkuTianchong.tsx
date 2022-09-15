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

let IconCangkuTianchong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M42.666667 917.333333V396.8c0-19.2 8.533333-38.4 25.6-51.2l405.333333-292.266667c10.666667-6.4 25.6-10.666667 38.4-10.666666 12.8 0 27.733333 4.266667 38.4 12.8l405.333333 292.266666c17.066667 12.8 25.6 29.866667 25.6 51.2V917.333333c0 36.266667-27.733333 64-64 64H106.666667c-36.266667 0-64-27.733333-64-64z m320-384c0-36.266667-27.733333-64-64-64h-85.333334c-36.266667 0-64 27.733333-64 64v85.333334c0 36.266667 27.733333 64 64 64h85.333334c36.266667 0 64-27.733333 64-64v-85.333334z m0 298.666667c0-36.266667-27.733333-64-64-64h-85.333334c-36.266667 0-64 27.733333-64 64v85.333333c0 36.266667 27.733333 64 64 64h85.333334c36.266667 0 64-27.733333 64-64v-85.333333z m320 0c0-36.266667-27.733333-64-64-64h-85.333334c-36.266667 0-64 27.733333-64 64v85.333333c0 36.266667 27.733333 64 64 64h85.333334c36.266667 0 64-27.733333 64-64v-85.333333z"
        fill={getIconColor(color, 0, '#666767')}
      />
    </Svg>
  );
};

IconCangkuTianchong.defaultProps = {
  size: 18,
};

IconCangkuTianchong = React.memo ? React.memo(IconCangkuTianchong) : IconCangkuTianchong;

export default IconCangkuTianchong;
