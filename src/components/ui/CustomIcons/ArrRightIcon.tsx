import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ArrRightIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 23 24" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="m8.491 1.567 1.19-1.19a1.28 1.28 0 0 1 1.816 0l10.414 10.41a1.28 1.28 0 0 1 0 1.816L11.502 23.012a1.28 1.28 0 0 1-1.816 0l-1.19-1.19a1.287 1.287 0 0 1 .022-1.837l6.45-6.145H-.428a1.283 1.283 0 0 1-1.286-1.285V10.84c0-.712.573-1.286 1.286-1.286h15.396l-6.455-6.15a1.28 1.28 0 0 1-.022-1.837"
      ></Path>
    </Svg>
  );
};

export default ArrRightIcon;
