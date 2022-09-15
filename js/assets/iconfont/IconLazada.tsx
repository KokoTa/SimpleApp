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

let IconLazada: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M481.33428743 855.15551505c-45.07064446-25.62840525-380.71438501-233.04174402-393.88208395-239.22791134-9.72111895-4.15356877-15.90728628-13.87468902-17.32126642-24.30279806V301.05170958c0-11.04672615 4.86056012-20.76784641 14.58167909-27.04238669l2.73958733-1.41398143c32.60993687-20.14922928 140.77948359-85.2807288 158.1007513-94.29485768 7.60014746-4.86056012 17.32126771-4.86056012 25.62840524-0.70699137 8.30713883 4.15356877 151.82620975 97.74143639 175.42201903 106.13694946 15.90728628 7.60014746 34.0239183 11.13510039 52.05217481 11.13510039 20.14922928 0.70699007 40.21008433-4.15356877 58.23834341-13.87468902 22.88881791-11.75371753 167.82187027-102.60199651 169.94284177-102.60199653 3.44657869-2.03259726 7.60014746-3.44657869 11.75371623-3.44657868 4.86056012 0 9.01412889 1.41398143 13.16769895 3.44657868 19.44223922 11.13510039 154.65417262 92.26226043 160.22172151 95.70883914 9.72111895 5.5675502 15.28866916 15.90728628 15.28867046 27.04238668v290.57309607c-1.41398143 10.42811033-7.60014746 19.44223922-17.32126772 24.30279935-12.46070759 6.89315739-347.39745806 214.30649617-393.17509258 239.22791004-5.5675502 2.73958863-11.13510039 4.86056012-17.32126771 4.86056014-6.27454027-0.08837424-12.54908182-2.20934575-18.11663075-4.94893308z"
        fill={getIconColor(color, 0, '#F65636')}
      />
      <Path
        d="M738.67882951 174.85390508c4.86056012 0 9.01412889 1.41398143 13.16769766 3.4465787 19.44223922 11.13510039 154.65417262 92.26226043 160.2217228 95.70883911 9.72111895 5.5675502 15.28866916 15.90728628 15.28866917 27.04238669v290.57309607c-1.41398143 10.42811033-7.60014746 19.44223922-17.32126641 24.30279806-6.27454027 3.44657869-92.96925051 56.82436198-183.72915656 113.03010684L692.28257787 749.72555567c-79.7131786 48.51722316-154.65417262 94.2948577-174.71502767 105.42995938-5.5675502 2.73958863-11.13510039 4.86056012-17.32126773 4.86055883V294.86554226h8.30713884c17.32126771-0.70699007 34.0239183-5.5675502 49.93120459-13.87468902 9.72111895-4.86056012 39.50309427-23.59580798 72.11303115-42.94967296l16.61427634-9.72111897c40.9170757-24.92141517 80.42016996-49.22421323 81.12716004-49.22421322 1.94422431-3.53495294 6.09779308-4.24194301 10.33973608-4.24194301z"
        fill={getIconColor(color, 1, '#FB25A9')}
      />
      <Path
        d="M497.32994666 859.30908382h1.41398144c6.27454027 0 11.75371753-1.41398143 17.32126772-4.15356877 45.07064446-25.62840525 380.71438501-233.04174402 393.17509259-239.22791134 9.72111895-4.15356877 15.90728628-13.16769765 17.32126642-24.30279806V301.05170958c0-4.86056012-1.41398143-9.72111895-3.4465787-13.87468903L497.32994666 517.390803V859.30908382"
        fill={getIconColor(color, 2, '#F50197')}
      />
      <Path
        d="M495.91596652 855.86250512h-2.1209715c-6.27454027 0-11.75371753-1.41398143-17.32126771-4.15356877-45.07064446-25.62840525-376.56081625-230.92077251-389.02152383-237.19531407-9.72111895-4.15356877-15.90728628-13.16769765-17.32126642-23.595808V303.17268108c0-4.86056012 1.41398143-9.72111895 3.44657868-13.87468903L495.20897517 517.390803l0.70699135 338.47170212z"
        fill={getIconColor(color, 3, '#F14918')}
      />
    </Svg>
  );
};

IconLazada.defaultProps = {
  size: 18,
};

IconLazada = React.memo ? React.memo(IconLazada) : IconLazada;

export default IconLazada;
