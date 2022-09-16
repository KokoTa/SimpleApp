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

let IconIconset0254: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.333333 853.333333l106.666667 0L448 170.666667l-106.666667 0L341.333333 853.333333zM256 853.333333l42.666667 0L298.666667 170.666667l-42.666667 0L256 853.333333zM490.666667 853.333333l42.666667 0L533.333333 170.666667l-42.666667 0L490.666667 853.333333zM128 853.333333l85.333333 0L213.333333 170.666667 128 170.666667 128 853.333333zM42.666667 213.333333l0 597.333333c0 23.466667 19.2 42.666667 42.666667 42.666667L85.333333 170.666667C61.866667 170.666667 42.666667 189.866667 42.666667 213.333333zM938.666667 170.666667l-42.666667 0 0 682.666667 42.666667 0c23.466667 0 42.666667-19.2 42.666667-42.666667L981.333333 213.333333C981.333333 189.866667 962.133333 170.666667 938.666667 170.666667zM576 853.333333l42.666667 0L618.666667 170.666667l-42.666667 0L576 853.333333zM810.666667 853.333333l42.666667 0L853.333333 170.666667l-42.666667 0L810.666667 853.333333zM661.333333 853.333333l106.666667 0L768 170.666667l-106.666667 0L661.333333 853.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconset0254.defaultProps = {
  size: 18,
};

IconIconset0254 = React.memo ? React.memo(IconIconset0254) : IconIconset0254;

export default IconIconset0254;