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

let IconCeshi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96a454.08 454.08 0 0 1 454.08 454.08c0 46.912-7.168 93.504-20.48 137.984l-4.8 14.912a31.936 31.936 0 0 1-8.128 22.72c-30.592 78.272-80.704 147.84-144.768 197.44a32 32 0 0 1-52.032 11.84 30.848 30.848 0 0 1-12.16-15.68l-45.76-63.104a32 32 0 1 1 51.84-37.632l31.616 43.648a398.784 398.784 0 0 0 102.72-138.752l-52.8-17.216a32 32 0 1 1 19.84-60.8l54.976 17.856c10.368-36.672 15.936-74.88 15.936-113.28 0-22.016-1.92-43.712-5.376-64.768l-65.6 21.376a32 32 0 0 1-19.776-60.864l69.632-22.656a390.4 390.4 0 0 0-102.016-157.44l-49.216 67.776a32 32 0 1 1-51.776-37.632l50.88-70.016a387.84 387.84 0 0 0-182.848-64.32v91.52a32 32 0 1 1-64 0V161.088a387.84 387.84 0 0 0-184.128 62.848l52.096 71.808a32 32 0 1 1-51.776 37.632l-50.816-69.952a390.4 390.4 0 0 0-103.872 158.464l73.088 23.808a32 32 0 1 1-19.776 60.8l-69.312-22.528c-3.648 21.44-5.568 43.52-5.568 66.048 0 38.784 5.76 77.44 16.32 114.368l58.56-19.072a32 32 0 0 1 19.84 60.864l-56.256 18.368c24.832 54.4 60.672 102.848 104.64 139.712l33.152-45.76a32 32 0 1 1 51.84 37.632l-54.208 74.496a32 32 0 0 1-53.632-2.88l9.408 6.784C133.312 851.648 57.92 702.4 57.92 550.08A454.08 454.08 0 0 1 512 96z m206.08 280.832a32 32 0 0 1 0.192 40l-150.4 190.4a64 64 0 1 1-70.016-93.632l175.232-141.504a32 32 0 0 1 44.992 4.736z"
        fill={getIconColor(color, 0, '#727272')}
      />
    </Svg>
  );
};

IconCeshi.defaultProps = {
  size: 18,
};

IconCeshi = React.memo ? React.memo(IconCeshi) : IconCeshi;

export default IconCeshi;