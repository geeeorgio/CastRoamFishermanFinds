import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ArrLeftIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 23 24" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="m13.797 21.822-1.189 1.19a1.28 1.28 0 0 1-1.816 0L.378 12.602a1.28 1.28 0 0 1 0-1.815L10.787.377a1.28 1.28 0 0 1 1.816 0l1.189 1.19c.509.509.498 1.34-.021 1.837L7.32 9.55h15.396c.713 0 1.286.573 1.286 1.286v1.714c0 .713-.573 1.286-1.286 1.286H7.321l6.455 6.15c.525.498.536 1.328.021 1.837"
      ></Path>
    </Svg>
  );
};

export default ArrLeftIcon;
