import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const PauseIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 12 14" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M0 14h4V0H0zM8 0v14h4V0z"
      ></Path>
    </Svg>
  );
};

export default PauseIcon;
