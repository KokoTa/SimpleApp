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

let IconQuxiaopipeiguize: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M881.081827 717.304203l63.732305-74.705218 74.720812 59.941685-66.215634 79.943472 66.216934 62.953909-66.216934 75.331573-72.236183-75.331573-72.237482 85.527391-74.307574-70.908102 74.307574-79.489949-66.216934-69.733361 66.216934-67.395573z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M887.683249 593.419695V402.152609L534.694335 628.04467v264.316751l169.022376-92.471878v112.309929l-218.566823 111.735553L3.573604 740.354599V284.162599L485.149888 0.583472l481.576285 283.579127v264.331046L887.683249 593.419695z m-396.653158-37.022538l376.984041-231.920406-162.999228-80.993462-365.612183 225.621767 151.62737 87.290802z m117.409137-373.713218l-129.754314-79.766741L109.458843 334.154071l140.922152 84.919228 358.058233-236.38936zM95.18132 426.722112v258.059695l347.020345 207.578315V627.834152L179.862741 477.836345l-84.682721-51.114233z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </Svg>
  );
};

IconQuxiaopipeiguize.defaultProps = {
  size: 18,
};

IconQuxiaopipeiguize = React.memo ? React.memo(IconQuxiaopipeiguize) : IconQuxiaopipeiguize;

export default IconQuxiaopipeiguize;
