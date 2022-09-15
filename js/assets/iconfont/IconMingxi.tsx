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

let IconMingxi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M816 64h-80v64h80c26.5 0 48 21.5 48 48v672c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h80V64h-80c-61.8 0-112 50.2-112 112v672c0 61.8 50.2 112 112 112h608c61.8 0 112-50.2 112-112V176c0-61.8-50.2-112-112-112z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M384 64h256v64H384zM288 384h448v64H288zM288 608h288v64H288z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMingxi.defaultProps = {
  size: 18,
};

IconMingxi = React.memo ? React.memo(IconMingxi) : IconMingxi;

export default IconMingxi;
