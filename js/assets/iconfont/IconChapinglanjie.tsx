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

let IconChapinglanjie: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.886222 111.995259c91.363556 0 190.539852 15.644444 297.528889 46.914371a75.851852 75.851852 0 0 1 54.59437 72.817777v352.142223a189.62963 189.62963 0 0 1-33.60237 107.766518c-21.504 31.118222-51.275852 62.103704-89.334518 92.956445-47.028148 38.096593-99.51763 73.443556-157.487408 106.059851l-14.601481 8.097186a113.777778 113.777778 0 0 1-110.857482-1.005037c-78.885926-44.942222-137.367704-82.792296-175.369481-113.53126-34.11437-27.591111-65.308444-63.867259-93.620148-108.847407a189.62963 189.62963 0 0 1-29.146074-100.996741v-342.660741a75.851852 75.851852 0 0 1 54.556444-72.817777c106.875259-31.250963 205.994667-46.895407 297.339259-46.895408zM512 272.004741c-114.87763 0-208.004741 93.108148-208.004741 208.00474 0 114.858667 93.127111 207.985778 208.004741 207.985778s208.004741-93.108148 208.004741-207.985778S626.87763 271.966815 512 271.966815z m124.928 136.343703A144.004741 144.004741 0 0 1 440.338963 604.918519zM512 336.004741c30.245926 0 58.311111 9.329778 81.483852 25.258666l-200.248889 200.210963A144.004741 144.004741 0 0 1 512 336.004741z"
        fill={getIconColor(color, 0, '#0CCA8A')}
      />
    </Svg>
  );
};

IconChapinglanjie.defaultProps = {
  size: 18,
};

IconChapinglanjie = React.memo ? React.memo(IconChapinglanjie) : IconChapinglanjie;

export default IconChapinglanjie;