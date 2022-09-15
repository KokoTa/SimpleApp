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

let IconQianbao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M707.84 915.2H316.16c-121.6 0-220.16-98.56-220.16-220.16V328.96c0-121.6 98.56-220.16 220.16-220.16h391.68c121.6 0 220.16 98.56 220.16 220.16v366.08c0 121.6-98.56 220.16-220.16 220.16z m-391.68-742.4c-85.76 0-156.16 70.4-156.16 156.16v366.08c0 85.76 70.4 156.16 156.16 156.16h391.68c85.76 0 156.16-70.4 156.16-156.16V328.96c0-85.76-70.4-156.16-156.16-156.16H316.16z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M793.6 633.6H646.4c-61.44 0-111.36-49.92-111.36-111.36v-19.2c0-61.44 49.92-111.36 111.36-111.36H793.6c15.36 0 28.16 12.8 28.16 28.16S810.24 448 793.6 448H646.4c-29.44 0-53.76 24.32-53.76 53.76v19.2c0 29.44 24.32 53.76 53.76 53.76H793.6c15.36 0 28.16 12.8 28.16 28.16s-11.52 30.72-28.16 30.72z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconQianbao.defaultProps = {
  size: 18,
};

IconQianbao = React.memo ? React.memo(IconQianbao) : IconQianbao;

export default IconQianbao;
