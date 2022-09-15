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

let IconPandianguanli: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M637.7 701.7m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M800 96H672v192h192V160c0-35.2-28.8-64-64-64zM640 352c-17.6 0-32-14.4-32-32V96H224c-35.2 0-64 28.8-64 64v704c0 35.2 28.8 64 64 64h576c5.7 0 11.3-0.8 16.5-2.2L726 835.2c-25.3 16.8-55.6 26.5-88.2 26.5-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160c0 32.6-9.8 62.9-26.5 88.2l90.6 90.6c1.4-5.3 2.2-10.8 2.2-16.5V352H640zM415.8 598.6c-5.8 5.8-13.8 9.4-22.6 9.4h-96c-17.6 0-32-14.4-32-32 0-8.8 3.6-16.8 9.4-22.6 5.8-5.8 13.8-9.4 22.6-9.4h96c17.6 0 32 14.4 32 32 0 8.8-3.6 16.8-9.4 22.6z m288-128c-5.8 5.8-13.8 9.4-22.6 9.4h-384c-17.6 0-32-14.4-32-32 0-8.8 3.6-16.8 9.4-22.6 5.8-5.8 13.8-9.4 22.6-9.4h384c17.6 0 32 14.4 32 32 0 8.8-3.6 16.8-9.4 22.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconPandianguanli.defaultProps = {
  size: 18,
};

IconPandianguanli = React.memo ? React.memo(IconPandianguanli) : IconPandianguanli;

export default IconPandianguanli;
