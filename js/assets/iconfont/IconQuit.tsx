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

let IconQuit: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1049 1024" width={size} height={size} {...rest}>
      <Path
        d="M463.278798 1024H63.252087c-34.190317 0-63.252087-29.06177-63.252087-63.252087V63.252087C0 29.06177 27.352254 0 63.252087 0h400.026711c34.190317 0 63.252087 29.06177 63.252087 63.252087s-27.352254 63.252087-63.252087 63.252087H124.794658v770.991652h338.48414c34.190317 0 63.252087 29.06177 63.252087 63.252087s-29.06177 63.252087-63.252087 63.252087z"
        fill={getIconColor(color, 0, '#1A1A1A')}
      />
      <Path
        d="M1032.547579 471.826377L704.320534 136.761269c-35.899833-37.609349-99.15192-11.966611-99.15192 41.02838V256.427379c0 32.480801-25.642738 58.123539-58.123539 58.123539H278.651085c-32.480801 0-58.123539 25.642738-58.123539 58.123539v278.651086c0 32.480801 25.642738 58.123539 58.123539 58.123539H547.045075c32.480801 0 58.123539 25.642738 58.123539 58.123539v78.63773c0 51.285476 63.252087 76.928214 99.15192 41.02838l328.227045-333.355592c22.223706-23.933222 22.223706-59.833055 0-82.056762z"
        fill={getIconColor(color, 1, '#1A1A1A')}
      />
    </Svg>
  );
};

IconQuit.defaultProps = {
  size: 18,
};

IconQuit = React.memo ? React.memo(IconQuit) : IconQuit;

export default IconQuit;
