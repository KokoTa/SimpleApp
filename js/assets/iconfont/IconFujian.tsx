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

let IconFujian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M941.6 838.3V280.5c0-67.6-59.5-60.7-59.5-60.7H545c-20.8 0-30.1-11-30.1-11s-15-25.4-39.9-65.9c-26.6-41.6-58.4-34.7-58.4-34.7H154.8c-72.8 0-74 72.8-74 72.8v653.8c0 80.4 59.5 71.1 59.5 71.1h746.9c63.1 0.1 53.8-67 54.4-67.6zM444.9 646.6c9.6 9.7 25 9.7 34.5 0l160.9-162.7c23.5-23.9 23.5-62.7 0-86.6-23.5-23.9-61.7-23.9-85.2-0.7L394.2 560.1c-37.5 38.1-37.5 100 0 138 37.5 38.1 98.5 38.1 135.9 0l111-113.4c5.9-6 15.4-6 21.3-0.7 5.9 6 5.9 14.9 0 20.9L550.7 719c-48.5 50-127.9 50-177.1 0-49.2-49.2-49.2-129.8 0-179.8l160.9-162.7c34.5-35.8 91.1-36.6 126.4-0.7 35.3 35.8 35.3 93.3 0 129.1L500.7 667.5c-21.3 21.6-55.1 21.6-76.4 0-20.6-20.9-20.6-55.2 0-76.9l135.9-137.3c5.9-6 14.7-6 20.6 0 5.9 6 5.9 14.9 0 20.9L444.9 611.5c-9.6 9.7-9.6 25.4 0 35.1z"
        fill={getIconColor(color, 0, '#94A2B1')}
      />
    </Svg>
  );
};

IconFujian.defaultProps = {
  size: 18,
};

IconFujian = React.memo ? React.memo(IconFujian) : IconFujian;

export default IconFujian;
