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

let IconIos: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M615.913 183.762c31.803-40.968 55.898-98.81 47.218-157.832-52.08 3.61-112.838 36.802-148.25 79.991-32.36 39.164-58.954 97.353-48.607 153.876 56.94 1.805 115.545-32.15 149.639-76.035zM896.859 739.2c-22.776 50.481-33.677 73.117-62.98 117.835-40.97 62.496-98.603 140.266-170.055 140.822-63.467 0.694-79.854-41.386-165.957-40.9s-104.156 41.733-167.693 41.107c-71.451-0.695-126.03-70.827-166.929-133.32-114.364-174.568-126.376-379.48-55.897-488.498 50.203-77.354 129.294-122.558 203.661-122.558 75.688 0 123.253 41.593 185.956 41.593 60.758 0 97.768-41.663 185.26-41.663 66.245 0 136.447 36.109 186.441 98.603-163.805 89.922-137.278 324.275 28.192 387.047v-0.068h0.001z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIos.defaultProps = {
  size: 18,
};

IconIos = React.memo ? React.memo(IconIos) : IconIos;

export default IconIos;
