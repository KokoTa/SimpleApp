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

let IconProduct: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M327.5103125 317.7503125v-53.1384375C327.5103125 147.1525 410.1275 52 512 52c101.8725 0 184.4896875 95.2096875 184.4896875 212.611875v53.0821875h-84.7059375v-53.0821875c0-73.1296875-47.548125-127.9059375-99.78375-127.9059375S412.21625 191.48125 412.21625 264.611875v53.0821875h-84.7059375z m84.7059375 0h-84.7059375v-53.1384375C327.5103125 147.1525 410.1275 52 512 52c101.8725 0 184.4896875 95.2096875 184.4896875 212.611875v53.0821875h-84.7059375v-53.0821875c0-73.1296875-47.548125-127.9059375-99.78375-127.9059375S412.21625 191.48125 412.21625 264.611875v53.0821875z"
        fill={getIconColor(color, 0, '#515151')}
      />
      <Path
        d="M248 316.508125l-62.1178125 549.346875c-0.620625 5.92875 3.6140625 11.293125 9.6 11.9146875l657.6 0.1125a10.7859375 10.7859375 0 0 0 10.7859375-10.8421875l-72.2821875-550.7015625a10.7859375 10.7859375 0 0 0-10.7296875-9.3740625H258.7296875a10.7859375 10.7859375 0 0 0-10.7296875 9.6z m-84.140625-9.4875a95.491875 95.491875 0 0 1 94.8703125-84.7621875H780.85625c47.94375 0 88.4334375 35.52 94.7015625 83.011875l72.225 549.346875a95.491875 95.491875 0 0 1-94.700625 107.971875H196.668125A95.491875 95.491875 0 0 1 101.7978125 856.309375l62.060625-549.28875z m206.5125 131.690625c-45.346875 0-81.8821875-36.875625-81.8821875-82.2215625 0-45.2896875 36.53625-82.1653125 81.88125-82.1653125 45.290625 0 81.883125 36.875625 81.883125 82.1653125 0 45.3459375-36.5925 82.220625-81.8821875 82.220625z m0-84.706875c-1.6940625 0-2.82375 1.1859375-2.82375 2.484375 0 1.299375 1.1296875 2.5415625 2.82375 2.5415625 1.6378125 0 2.82375-1.2421875 2.82375-2.540625s-1.1859375-2.484375-2.82375-2.484375z m283.9340625 84.7059375c-45.2896875 0-81.8821875-36.8746875-81.8821875-82.220625 0-45.2896875 36.5925-82.1653125 81.88125-82.1653125 45.290625 0 81.883125 36.875625 81.883125 82.1653125 0 45.3459375-36.5925 82.220625-81.8821875 82.220625z m0-84.7059375c-1.6378125 0-2.82375 1.1859375-2.82375 2.484375 0 1.299375 1.1859375 2.5415625 2.82375 2.5415625 1.6940625 0 2.82375-1.2421875 2.82375-2.540625s-1.1296875-2.484375-2.82375-2.484375z"
        fill={getIconColor(color, 1, '#515151')}
      />
    </Svg>
  );
};

IconProduct.defaultProps = {
  size: 18,
};

IconProduct = React.memo ? React.memo(IconProduct) : IconProduct;

export default IconProduct;