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

let IconMy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1542 1024" width={size} height={size} {...rest}>
      <Path
        d="M7.53 1017.725h1517.176V8.785H7.529v1008.94z m1519.686 2.51v-3.764 3.764zM1.255 1024V1.255H1530.98v1021.49H1.255z"
        fill={getIconColor(color, 0, '#353636')}
      />
      <Path
        d="M3.765 707.765h1523.45v77.804H3.766z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M3.765 629.96h1523.45v77.805H3.766z m0 312.471h1523.45v77.804H3.766z"
        fill={getIconColor(color, 2, '#D64634')}
      />
      <Path
        d="M3.765 550.902h1523.45v77.804H3.766z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
      <Path
        d="M3.765 785.569h1523.45v77.804H3.766z"
        fill={getIconColor(color, 4, '#D64634')}
      />
      <Path
        d="M3.765 864.627h1523.45v77.804H3.766z m0-626.196h1523.45v77.804H3.766z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
      <Path
        d="M3.765 473.098h1523.45v77.804H3.766z"
        fill={getIconColor(color, 6, '#D64634')}
      />
      <Path
        d="M3.765 82.824h1523.45v77.803H3.766z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
      <Path
        d="M3.765 160.627h1523.45v77.804H3.766z m0-155.607h1523.45v77.804H3.766z"
        fill={getIconColor(color, 8, '#D64634')}
      />
      <Path
        d="M3.765 395.294h1523.45v77.804H3.766z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
      <Path
        d="M3.765 317.49h1523.45v77.804H3.766z"
        fill={getIconColor(color, 10, '#D64634')}
      />
      <Path
        d="M3.765 5.02H765.49v624.94H3.765z"
        fill={getIconColor(color, 11, '#0050A2')}
      />
      <Path
        d="M346.353 491.922c-96.628 0-174.431-77.804-174.431-174.432s77.803-174.431 174.43-174.431c28.864 0 55.217 6.274 79.06 18.823-33.883-26.353-75.294-41.411-121.726-41.411-109.176 0-197.02 87.843-197.02 197.02S194.51 514.51 303.687 514.51c45.177 0 87.843-15.059 121.726-41.412-23.843 11.294-50.196 18.824-79.06 18.824z"
        fill={getIconColor(color, 12, '#FCD300')}
      />
      <Path
        d="M501.96 151.843L515.766 256l58.98-87.843-32.627 100.392 89.098-53.96-71.53 75.293 104.157-8.784-97.882 36.392 97.882 36.392-104.157-8.784 71.53 75.294-89.098-53.96 32.627 100.392-58.98-87.844-13.804 104.157-13.804-104.157-57.726 87.844L463.06 366.43l-90.353 53.961 72.784-75.294-104.157 8.784 97.883-36.392-97.883-36.392 104.157 8.784-72.784-75.294 90.353 53.961-32.628-100.392L488.157 256z"
        fill={getIconColor(color, 13, '#FCD300')}
      />
    </Svg>
  );
};

IconMy.defaultProps = {
  size: 18,
};

IconMy = React.memo ? React.memo(IconMy) : IconMy;

export default IconMy;
