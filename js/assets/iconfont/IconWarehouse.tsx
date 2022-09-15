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

let IconWarehouse: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M858.96000031 392l-57.12-199.99999969H222.15999969L165.03999969 392H432.00000031v40.00000031a79.99999969 79.99999969 0 1 0 159.99999938 0V392h266.96000062zM152 471.99999969v360h720v-360h-205.03999969a160.08 160.08 0 0 1-309.92000062 0H152z m710.16-360L951.99999969 426.39999969V912.00000031H72.00000031V426.39999969L161.84 111.99999969h700.32z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

IconWarehouse.defaultProps = {
  size: 18,
};

IconWarehouse = React.memo ? React.memo(IconWarehouse) : IconWarehouse;

export default IconWarehouse;
