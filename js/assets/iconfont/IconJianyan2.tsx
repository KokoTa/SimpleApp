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

let IconJianyan2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M718.165 106.496c22.622 0 40.96 18.338 40.96 40.96s-18.338 40.96-40.96 40.96h-28.273v199.35L917.941 682.71a106.496 106.496 0 0 1 22.246 65.142c0 58.816-47.68 106.496-106.496 106.496H215.725a106.496 106.496 0 0 1-67.17-23.855c-45.642-37.097-52.569-104.17-15.472-149.811l238.532-293.473V188.416H330.41c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96h387.754zM521.107 603.445c-51.75-24.112-108.01-25.249-166.404-4.12-21.271 7.697-32.276 31.181-24.58 52.453 7.698 21.272 31.182 32.277 52.454 24.58 38.288-13.854 71.866-13.313 103.045 0.933l1.758 0.913c58.11 29.832 127.537 29.37 206.164 0.878 21.268-7.707 32.262-31.196 24.555-52.464-7.707-21.268-31.196-32.262-52.464-24.555-59.703 21.634-106.473 21.634-142.533 2.378a40.96 40.96 0 0 0-1.995-0.996z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJianyan2.defaultProps = {
  size: 18,
};

IconJianyan2 = React.memo ? React.memo(IconJianyan2) : IconJianyan2;

export default IconJianyan2;
