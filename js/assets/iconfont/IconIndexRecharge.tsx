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

let IconIndexRecharge: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M650.72 512.48c18.72 0 34.08-15.36 34.08-34.08 0-18.72-15.36-34.08-34.08-34.08h-104.16v-1.44L673.76 310.4c12.96-13.92 12.96-35.52-0.96-48.48-13.44-12.96-35.04-12.48-48.48 0.96l-108.96 114.24-115.2-114.72c-13.44-13.44-35.04-13.44-48.48 0s-13.92 35.04-0.48 48.48l126.72 127.2v6.24H376.64c-18.72 0-34.08 15.36-34.08 34.08 0 18.72 15.36 34.08 34.08 34.08h101.28v68.64H376.64c-18.72 0-34.08 15.36-34.08 34.08s15.36 34.08 34.08 34.08h101.28v101.76c0 18.72 15.36 34.08 34.08 34.08 18.72 0 34.08-15.36 34.08-34.08v-101.76h104.16c18.72 0 34.08-15.36 34.08-34.08s-15.36-34.08-34.08-34.08h-104.16v-68.64h104.64z m306.72-284.64h-252.48c-19.2 0-34.56-15.36-34.56-34.56s15.36-34.56 34.56-34.56h252.48c19.2 0 34.56 15.36 34.56 34.56 0 18.72-15.36 34.56-34.56 34.56z"
        fill={getIconColor(color, 0, '#515151')}
      />
      <Path
        d="M797.12 318.56V66.56c0-19.2 15.36-34.56 34.56-34.56s34.56 15.36 34.56 34.56v252.48c0 19.2-15.36 34.56-34.56 34.56-19.2-0.48-34.56-15.84-34.56-35.04z"
        fill={getIconColor(color, 1, '#515151')}
      />
      <Path
        d="M512 992C247.52 992 32 776.48 32 512S247.52 32 512 32v72c-225.12 0-408 182.88-408 408s182.88 408 408 408 408-182.88 408-408h72c0 264.48-215.52 480-480 480z"
        fill={getIconColor(color, 2, '#515151')}
      />
      <Path
        d="M956 512m-36 0a36 36 0 1 0 72 0 36 36 0 1 0-72 0Z"
        fill={getIconColor(color, 3, '#515151')}
      />
      <Path
        d="M512 68m-36 0a36 36 0 1 0 72 0 36 36 0 1 0-72 0Z"
        fill={getIconColor(color, 4, '#515151')}
      />
    </Svg>
  );
};

IconIndexRecharge.defaultProps = {
  size: 18,
};

IconIndexRecharge = React.memo ? React.memo(IconIndexRecharge) : IconIndexRecharge;

export default IconIndexRecharge;
