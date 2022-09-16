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

let IconPaypal: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M394.24 533.577143c1.828571-8.411429 9.325714-14.262857 17.92-14.262857h96.548571l2.925715-0.182857c50.285714-0.731429 95.085714-19.017143 126.537143-51.382858 21.394286-22.125714 35.84-49.554286 42.971428-81.371428 3.108571-13.531429 4.205714-26.697143 3.474286-38.582857V347.428571c-0.914286-15.177143-4.754286-29.074286-11.702857-41.142857-21.211429-37.12-65.462857-50.285714-96.731429-50.285714h-215.771428l-93.622858 411.794286h97.462858l29.988571-134.217143z m19.382857-86.125714l28.891429-122.697143c2.011429-8.228571 9.325714-14.08 17.737143-14.08h66.194285c14.811429 0 28.525714 4.205714 40.045715 12.251428 22.308571 15.908571 31.268571 43.52 23.04 72.228572-4.205714 17.371429-14.262857 34.011429-28.708572 47.36-4.937143 4.571429-10.422857 8.777143-16.091428 12.251428-15.725714 9.874286-33.097143 14.994286-49.92 14.994286h-63.451429c-5.668571 0-10.788571-2.56-14.262857-6.948571a17.737143 17.737143 0 0 1-3.474286-15.36z"
        fill={getIconColor(color, 0, '#353535')}
      />
      <Path
        d="M719.542857 375.04c-0.731429 6.4-1.645714 12.617143-2.925714 19.2-8.594286 38.582857-26.331429 71.68-52.48 98.742857-38.217143 39.497143-92.16 61.805714-151.954286 62.537143l-3.657143 0.182857h-81.92l-29.805714 134.217143c-1.828571 8.411429-9.325714 14.262857-17.92 14.262857H358.4L343.954286 768h97.462857l29.805714-134.217143c1.828571-8.411429 9.325714-14.262857 17.92-14.262857h96.548572l2.925714-0.182857c50.285714-0.731429 95.085714-19.017143 126.537143-51.382857 21.394286-22.125714 35.84-49.554286 42.971428-81.371429 3.108571-13.714286 4.205714-26.697143 3.474286-38.765714-0.914286-15.36-4.754286-29.257143-11.702857-41.508572a90.660571 90.660571 0 0 0-30.354286-31.268571zM525.348571 423.862857c3.657143-2.377143 7.314286-5.12 10.605715-8.045714 9.142857-8.411429 15.542857-19.017143 18.285714-29.805714 4.022857-14.445714 0.731429-26.148571-8.96-33.097143-5.12-3.657143-11.702857-5.485714-18.834286-5.485715h-51.748571l-20.297143 86.125715h40.228571c10.24-0.182857 20.845714-3.474286 30.72-9.691429z"
        fill={getIconColor(color, 1, '#353535')}
      />
      <Path
        d="M512 9.142857C234.24 9.142857 9.142857 234.24 9.142857 512S234.24 1014.857143 512 1014.857143 1014.857143 789.76 1014.857143 512 789.76 9.142857 512 9.142857z m281.782857 485.485714c-8.594286 38.582857-26.148571 71.68-52.48 98.742858-38.217143 39.497143-92.16 61.805714-151.954286 62.537142l-3.657142 0.182858h-81.92l-29.805715 134.217142c-1.828571 8.411429-9.325714 14.262857-17.92 14.262858h-135.131428a18.285714 18.285714 0 0 1-14.262857-6.948572c-3.474286-4.388571-4.754286-10.057143-3.474286-15.542857l17.737143-77.897143h-77.165715a18.285714 18.285714 0 0 1-14.262857-6.948571c-3.474286-4.388571-4.754286-10.057143-3.474285-15.542857l102.034285-448.365715c1.828571-8.411429 9.325714-14.262857 17.737143-14.262857H576c43.154286 0 99.657143 18.102857 128.548571 68.571429 7.862857 13.897143 12.982857 29.44 15.177143 46.08 26.88 12.068571 48.457143 30.354286 61.988572 54.125714 9.691429 17.005714 15.177143 36.388571 16.457143 57.417143 0.914286 15.908571-0.548571 32.365714-4.388572 49.371428z"
        fill={getIconColor(color, 2, '#353535')}
      />
    </Svg>
  );
};

IconPaypal.defaultProps = {
  size: 18,
};

IconPaypal = React.memo ? React.memo(IconPaypal) : IconPaypal;

export default IconPaypal;