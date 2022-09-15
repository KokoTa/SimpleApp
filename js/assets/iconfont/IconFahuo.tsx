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

let IconFahuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M239.158 100.98c85.459 0 154.738 69.28 154.738 154.74 0 85.457-69.277 154.737-154.738 154.737-85.46 0-154.74-69.28-154.74-154.737 0-85.46 69.28-154.74 154.74-154.74z m77.147 140.082v-59.263l-99.341 88.577-54.954-49.169v59.263l54.954 49.17 99.341-88.578zM932.298 622.77c-5.654 0.308-12.248 0.47-19.79 0.47H739.172c-4.397 0-8.793-2.2-13.19-6.595-4.397-4.402-6.596-8.166-6.596-11.309v-0.94c-0.622-30.777-0.946-58.721-0.946-83.85v-85.724c0-6.909 2.835-13.35 8.484-19.313 5.651-5.967 12.558-8.943 20.725-8.943 0.628 0 5.338-0.319 14.135-0.948 8.792-0.63 19.623-0.16 32.503 1.41 12.876 1.567 26.534 5.027 40.979 10.363 14.441 5.338 27.945 13.975 40.509 25.91 19.47 20.1 33.286 44.436 41.45 73.01 8.166 28.574 15.707 58.25 22.608 89.024 0 1.257 0.164 2.2 0.473 2.83 0.314 0.624 0.467 1.57 0.467 2.826 0.001 7.543-2.82 11.468-8.474 11.78z m73.951 11.304c-4.711-35.484-13.034-71.758-24.965-108.811-11.94-37.055-29.833-71.918-53.703-104.564-13.185-18.217-29.513-33.917-48.99-47.104a291.086 291.086 0 0 0-62.173-32.04c-21.984-8.165-44.28-13.969-66.891-17.423-22.609-3.454-44.28-4.237-65.005-2.355-6.903 0.624-12.716 5.498-17.427 14.601-4.71 9.103-7.063 17.114-7.063 24.02v454.087c0 11.309 4.08 21.041 12.246 29.204 8.167 8.162 17.892 12.244 29.202 12.244h16.96c0-15.698 2.982-30.62 8.95-44.75 5.97-14.132 14.131-26.526 24.495-37.207 10.366-10.679 22.45-19.163 36.27-25.44 13.815-6.28 28.886-9.423 45.214-9.423 16.334 0 31.874 2.2 46.637 6.597 14.76 4.396 27.64 11.303 38.62 20.723 10.995 9.423 19.789 21.668 26.384 36.742 6.59 15.075 9.886 33.292 9.886 54.642h38.63c3.766 0 6.754-1.886 8.954-5.65 2.19-3.772 4.08-8.325 5.644-13.668a95.304 95.304 0 0 0 3.3-16.012c0.63-5.34 0.942-9.896 0.942-13.662 0-19.469 0.159-44.596 0.47-75.37 0.32-30.764-1.884-63.893-6.595-99.38h0.008z m-168.163 164.39c16.326 0 30.461 5.966 42.394 17.903 11.935 11.935 17.9 26.057 17.9 42.394 0 16.953-5.967 31.399-17.9 43.327-11.933 11.938-26.062 17.904-42.394 17.904-16.952 0-31.246-5.966-42.866-17.904-11.618-11.933-17.427-26.373-17.427-43.327 0-16.335 5.81-30.46 17.427-42.394 11.62-11.937 25.907-17.902 42.866-17.902z m-648.15-0.937c-16.958 0-31.251 5.966-42.866 17.894-11.622 11.934-17.427 26.376-17.427 43.342 0 16.318 5.805 30.453 17.427 42.39 11.617 11.935 25.908 17.901 42.866 17.901s31.245-5.967 42.865-17.9c11.622-11.937 17.424-26.066 17.424-42.391 0-16.958-5.807-31.41-17.424-43.342-11.62-11.928-25.908-17.894-42.865-17.894z m240.683-590.689c4.677 16.642 7.037 33.955 7.037 51.937 0 27.427-5.217 53.075-15.657 76.927-10.435 23.852-24.597 44.722-42.482 62.61-17.89 17.885-38.752 31.905-62.61 42.038-23.856 10.134-49.192 15.202-76.03 15.202-27.43 0-53.07-5.068-76.921-15.202-23.853-10.135-44.72-24.153-62.61-42.038-17.89-17.888-32.05-38.758-42.483-62.61-10.438-23.852-15.657-49.495-15.657-76.927 0-2.997 0.078-5.971 0.201-8.932-8.977 11.017-16.044 23.056-21.165 36.131-5.656 14.442-8.48 29.204-8.48 44.278v489.882c0 11.935 3.454 21.042 10.362 27.32 6.914 6.274 15.704 9.422 26.38 9.422h21.67c0-40.194 10.21-70.186 30.618-89.967 20.405-19.785 49.772-29.682 88.081-29.682 40.2 0 69.722 10.678 88.558 32.037 18.841 21.353 28.266 50.559 28.266 87.612H564.88c10.056 0 18.681-3.454 25.908-10.366 7.221-6.905 10.835-15.695 10.835-26.374l-1.885-613.298H430.619z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFahuo.defaultProps = {
  size: 18,
};

IconFahuo = React.memo ? React.memo(IconFahuo) : IconFahuo;

export default IconFahuo;
