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

let IconTuihuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M892.571668 741.024114c-3.941775 26.753317-21.23258 34.947953-32.80208 34.605146L253.979482 775.629259c-12.970406 0.308015-27.565822-9.562796-31.459502-38.940894l-58.286498-521.975189c0 0-38.928614 0-50.484811 0-21.684882 0-39.263236-17.578354-39.263236-39.264259 0-21.684882 17.578354-39.264259 39.263236-39.264259 17.199731 0 73.453942 0 73.453942 0 19.61985 0 29.388331 9.081843 35.525098 35.945677l20.032242 87.454818 661.879566 0c22.424732 0 44.874023 22.186302 44.874023 44.875047L892.571668 741.024114zM556.874023 315.679729l-158.653393 158.6493 91.343381 0 0 222.770689 134.617977 0L624.181989 474.329029l91.343381 0L556.874023 315.679729zM310.069965 798.066271c24.78243 0 44.874023 20.090571 44.874023 44.874023 0 24.78243-20.091594 44.873-44.874023 44.873-24.784476 0-44.873-20.090571-44.873-44.873C265.196964 818.156842 285.285488 798.066271 310.069965 798.066271zM803.676036 798.066271c24.783453 0 44.873 20.090571 44.873 44.874023 0 24.78243-20.089547 44.873-44.873 44.873-24.784476 0-44.873-20.090571-44.873-44.873C758.803036 818.156842 778.89156 798.066271 803.676036 798.066271z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTuihuo.defaultProps = {
  size: 18,
};

IconTuihuo = React.memo ? React.memo(IconTuihuo) : IconTuihuo;

export default IconTuihuo;