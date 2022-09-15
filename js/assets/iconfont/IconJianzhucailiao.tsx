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

let IconJianzhucailiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1014.715733 850.2272L584.6528 105.301333c-26.350933-45.653333-92.245333-45.653333-118.613333 0l-163.2256 282.709334c-13.175467 22.818133 3.293867 51.3536 29.6448 51.3536h159.232c63.965867 0 120.183467 48.0768 124.330666 111.906133a119.0912 119.0912 0 0 1-20.0704 74.5472 33.723733 33.723733 0 0 0-0.136533 37.7344c12.919467 19.0976 20.462933 42.0864 20.462933 66.833067s-7.560533 47.735467-20.462933 66.833066a33.4848 33.4848 0 0 0 0 37.512534 118.852267 118.852267 0 0 1 19.8144 79.240533c-2.184533 20.667733 13.073067 38.946133 33.860267 38.946133h305.937066c52.701867 0.017067 85.6576-57.053867 59.2896-102.690133z"
        fill={getIconColor(color, 0, '#040000')}
      />
      <Path
        d="M496.452267 507.835733H51.3536A51.5072 51.5072 0 0 0 0 559.189333a51.5072 51.5072 0 0 0 51.3536 51.3536h445.098667a51.5072 51.5072 0 0 0 51.3536-51.3536 51.5072 51.5072 0 0 0-51.3536-51.3536zM496.452267 679.031467H51.3536A51.5072 51.5072 0 0 0 0 730.385067a51.5072 51.5072 0 0 0 51.3536 51.3536h445.098667a51.5072 51.5072 0 0 0 51.3536-51.3536 51.5072 51.5072 0 0 0-51.3536-51.3536zM496.452267 850.2272H51.3536A51.5072 51.5072 0 0 0 0 901.5808a51.5072 51.5072 0 0 0 51.3536 51.3536h445.098667a51.5072 51.5072 0 0 0 51.3536-51.3536 51.5072 51.5072 0 0 0-51.3536-51.3536z"
        fill={getIconColor(color, 1, '#040000')}
      />
    </Svg>
  );
};

IconJianzhucailiao.defaultProps = {
  size: 18,
};

IconJianzhucailiao = React.memo ? React.memo(IconJianzhucailiao) : IconJianzhucailiao;

export default IconJianzhucailiao;
