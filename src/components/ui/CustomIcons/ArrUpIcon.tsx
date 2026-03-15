import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ArrUpIcon = (props: SvgProps) => {
  return (
    <Svg height="23" fill="none" viewBox="0 0 24 23" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="m1.567 13.797-1.19-1.189a1.28 1.28 0 0 1 0-1.816L10.788.378a1.28 1.28 0 0 1 1.816 0l10.409 10.409a1.28 1.28 0 0 1 0 1.816l-1.19 1.189a1.287 1.287 0 0 1-1.837-.021L13.84 7.32v15.396c0 .713-.573 1.286-1.285 1.286H10.84a1.283 1.283 0 0 1-1.286-1.286V7.321l-6.15 6.455a1.28 1.28 0 0 1-1.837.021"
      ></Path>
    </Svg>
  );
};

export default ArrUpIcon;
