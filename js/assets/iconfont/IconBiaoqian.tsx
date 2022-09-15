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

let IconBiaoqian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M849.5 465.9L566.8 183.3c-14.7-14.7-43.8-26.7-64.6-26.7l-214.7-0.1c-3.1 0-6.7 0.8-10 1.3l62.3 62.3c32.4 32.3 32.4 84.9 0 117.2-32.3 32.4-84.9 32.4-117.2 0L157 271.6c-1.5 6.3-2.5 12.4-2.5 18l0.6 215.5c0 20.9 12.1 49.9 26.8 64.5l281.7 281.7c27.5-90.4 76.9-173.4 144.3-240.8 67.6-67.7 150.9-117.1 241.6-144.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M309.8 307.4c15.8-15.8 15.8-41.5 0-57.2L135.6 75.9C119.9 60 94.2 60 78.4 75.9a40.529 40.529 0 0 0-0.1 57.2l174.3 174.3c15.7 15.7 41.4 15.7 57.2 0zM930 546.9l-46.6-46.6c-89.2 22.8-174.6 69.3-245.4 140.2-70.9 70.9-117.3 156.3-140.2 245.4l46.6 46.6c36.7 36.7 96.9 36.7 133.7 0l252-252c36.6-36.7 36.6-96.9-0.1-133.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBiaoqian.defaultProps = {
  size: 18,
};

IconBiaoqian = React.memo ? React.memo(IconBiaoqian) : IconBiaoqian;

export default IconBiaoqian;
