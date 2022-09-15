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

let IconIndexCollection: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M909.1878784 238.93333333h-124.12121173V114.8121216a49.64848533 49.64848533 0 0 0-49.64848534-49.64848533H114.8121216a49.64848533 49.64848533 0 0 0-49.64848533 49.64848533v620.60605973a49.64848533 49.64848533 0 0 0 49.64848533 49.64848534h124.12121173v124.12121173a49.64848533 49.64848533 0 0 0 49.64848534 49.64848533h620.60605973a49.64848533 49.64848533 0 0 0 49.64848533-49.64848533V288.58181867a49.64848533 49.64848533 0 0 0-49.64848533-49.64848534zM139.63636373 710.5939392V139.63636373h570.95757547v570.95757547H139.63636373z m744.72727254 173.76969707H313.4060608v-99.2969696h422.01212053a49.64848533 49.64848533 0 0 0 49.64848534-49.64848534V313.4060608h99.2969696z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

IconIndexCollection.defaultProps = {
  size: 18,
};

IconIndexCollection = React.memo ? React.memo(IconIndexCollection) : IconIndexCollection;

export default IconIndexCollection;
