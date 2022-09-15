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

let IconAccount1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M987.648 741.376c-51.712-117.76-145.408-211.968-261.632-264.704 37.376-47.104 58.88-106.496 58.88-168.448 0-149.504-121.856-271.36-271.36-271.36s-271.36 121.856-271.36 271.36c0 61.952 20.992 121.344 58.88 168.448-116.224 52.224-209.92 146.944-261.12 264.192-24.064 54.784-18.944 117.76 14.336 167.936 32.768 50.176 88.576 80.384 148.48 80.384h623.104c59.904 0 115.712-30.208 148.48-80.384 31.744-49.664 37.376-112.128 13.312-167.424zM513.536 119.296c104.448 0 189.44 84.992 189.44 189.44 0 62.464-30.72 120.832-82.432 156.672-31.232 21.504-68.608 32.768-107.008 32.768S438.272 486.4 406.528 464.896a188.928 188.928 0 0 1-82.432-156.16c0-104.448 84.992-189.44 189.44-189.44z m391.168 744.96c-17.92 27.648-47.104 43.008-79.872 43.008H201.728c-32.768 0-61.952-15.872-79.872-43.008-17.92-27.136-20.48-60.416-7.68-90.112 46.08-105.984 133.12-189.44 240.128-231.424 48.128 28.16 102.4 43.008 158.72 43.008s110.592-14.848 158.72-43.008c107.008 41.984 194.048 125.44 240.128 231.424 13.824 30.208 10.752 62.976-7.168 90.112z"
        fill={getIconColor(color, 0, '#515151')}
      />
    </Svg>
  );
};

IconAccount1.defaultProps = {
  size: 18,
};

IconAccount1 = React.memo ? React.memo(IconAccount1) : IconAccount1;

export default IconAccount1;
