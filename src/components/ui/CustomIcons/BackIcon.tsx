import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const BackIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 17 16" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M7.371 7.583 14.781.18a.75.75 0 0 1 1.058 1.058L9.044 8.033l6.6 6.6a.75.75 0 1 1-1.065 1.057L7.37 8.483a.637.637 0 0 1 0-.9"
      ></Path>
      <Path
        fill={props.color ?? COLORS.white}
        d="M.186 7.583 7.596.18a.75.75 0 0 1 1.058 1.058L1.859 8.033l6.6 6.6a.75.75 0 0 1 0 1.057.75.75 0 0 1-1.058 0L.186 8.483a.637.637 0 0 1 0-.9"
      ></Path>
    </Svg>
  );
};

export default BackIcon;
