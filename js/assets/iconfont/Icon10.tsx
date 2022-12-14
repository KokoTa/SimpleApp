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

let Icon10: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 810.666667a298.666667 298.666667 0 1 1 0-597.333334 298.666667 298.666667 0 0 1 0 597.333334z m0-128c94.293333 0 170.666667-71.338667 170.666667-106.666667 0-35.328-76.373333 21.333333-170.666667 21.333333s-170.666667-56.661333-170.666667-21.333333c0 35.328 76.373333 106.666667 170.666667 106.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M720.554667 898.944a64 64 0 1 1-1.024-50.944c95.573333-70.656 155.136-187.050667 155.136-314.88C874.666667 320.981333 712.021333 149.333333 512 149.333333c-200.021333 0-362.666667 171.605333-362.666667 383.829334a406.442667 406.442667 0 0 0 21.077334 129.28 21.333333 21.333333 0 1 1-40.405334 13.653333 439.893333 439.893333 0 0 1-10.624-36.522667 85.333333 85.333333 0 0 1-8.448-168.533333C139.52 265.130667 307.968 106.666667 512 106.666667s372.48 158.464 401.066667 364.373333a85.333333 85.333333 0 0 1-8.533334 168.533333c-26.368 108.117333-92.373333 201.472-183.978666 259.370667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icon10.defaultProps = {
  size: 18,
};

Icon10 = React.memo ? React.memo(Icon10) : Icon10;

export default Icon10;
