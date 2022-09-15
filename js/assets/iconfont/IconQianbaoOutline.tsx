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

let IconQianbaoOutline: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M837.4 120.8H186.6c-67.2 0-121.9 54.6-121.9 121.9v538.6c0 67.2 54.6 121.9 121.9 121.9h650.7c67.2 0 121.9-54.6 121.9-121.9V242.7c0-67.2-54.7-121.9-121.8-121.9z m71.8 499.1H646.6c-23.9 0-46.4-9.4-63.5-26.5s-26.5-39.6-26.5-63.5v-35.8c0-23.9 9.4-46.4 26.5-63.5s39.6-26.5 63.5-26.5h262.6v215.8zM646.6 354.1c-77 0-140 63-140 140v35.8c0 77 63 140 140 140h262.6v111.4c0 39.6-32.2 71.9-71.9 71.9H186.6c-39.6 0-71.9-32.2-71.9-71.9V242.7c0-39.6 32.2-71.9 71.9-71.9h650.7c19.1 0 37.2 7.5 50.8 21.1 13.6 13.6 21.1 31.6 21.1 50.8v111.4H646.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M683.4 512m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconQianbaoOutline.defaultProps = {
  size: 18,
};

IconQianbaoOutline = React.memo ? React.memo(IconQianbaoOutline) : IconQianbaoOutline;

export default IconQianbaoOutline;
