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

let IconCaigou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M548.37 782.51c-58.67 0-108.68-0.12-126.66-0.49-58.58-1.22-79.85-56.41-82.9-85.43-0.36-2.64-44.14-330.81-57.17-410.06-2.47-15-8.37-25.42-18.06-31.81-18.26-12.08-47.55-8.57-57.3-6.18-12.81 3.16-25.82-4.7-28.99-17.51-3.18-12.8 4.53-25.75 17.33-29 5.61-1.4 55.97-13.15 95.08 12.5 21.02 13.76 34.58 35.97 39.23 64.22 13.14 79.95 55.66 398.64 57.46 412.17 0.57 4.8 5.89 42.53 36.31 43.16 52.03 1.12 389.82 0 393.21 0h0.08c13.2 0 23.92 10.67 23.97 23.9s-10.65 23.99-23.89 24.04c-9.15 0.03-154.51 0.49-267.7 0.49z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M499.55 853.42m-49.24 0a49.24 49.24 0 1 0 98.48 0 49.24 49.24 0 1 0-98.48 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M705.05 853.42m-49.24 0a49.24 49.24 0 1 0 98.48 0 49.24 49.24 0 1 0-98.48 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M314.67 284.84h514.58s49.64 16.55 57.91 61.22-47.98 274.66-47.98 274.66-26.47 46.33-56.26 41.36H369.27l-54.6-377.24z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IconCaigou.defaultProps = {
  size: 18,
};

IconCaigou = React.memo ? React.memo(IconCaigou) : IconCaigou;

export default IconCaigou;
