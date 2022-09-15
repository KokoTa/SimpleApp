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

let IconDashboard: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M143.81818174 409.19545479v470.86363652h736.36363652V409.97272695L500.05454521 143.81818174 143.81818174 409.19545479zM94.93181826 343.57727305L451.20909131 78.2a81.81818174 81.81818174 0 0 1 95.76818174-1.39090869l380.12727216 266.11363564A81.81818174 81.81818174 0 0 1 962 409.93181826v470.16818174a81.81818174 81.81818174 0 0 1-81.81818174 81.81818174H143.81818174a81.81818174 81.81818174 0 0 1-81.81818174-81.81818174V409.19545479a81.81818174 81.81818174 0 0 1 32.93181826-65.61818174z m282.68181827 281.86363564a40.90909131 40.90909131 0 0 0-40.90909132 40.90909131v0.94090869a40.90909131 40.90909131 0 0 0 40.90909131 40.90909131h268.77272696a40.90909131 40.90909131 0 0 0 40.90909131-40.90909131v-0.98181738a40.90909131 40.90909131 0 0 0-40.90909132-40.90909131h-268.77272695z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

IconDashboard.defaultProps = {
  size: 18,
};

IconDashboard = React.memo ? React.memo(IconDashboard) : IconDashboard;

export default IconDashboard;
