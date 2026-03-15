import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ArrDownIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 24 23" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="m1.567 8.491-1.19 1.19a1.28 1.28 0 0 0 0 1.816l10.41 10.414a1.28 1.28 0 0 0 1.816 0l10.409-10.409a1.28 1.28 0 0 0 0-1.816l-1.19-1.19a1.287 1.287 0 0 0-1.837.022l-6.145 6.45V-.428c0-.713-.573-1.286-1.285-1.286H10.84c-.712 0-1.286.573-1.286 1.286v15.396l-6.15-6.455a1.28 1.28 0 0 0-1.837-.022"
      ></Path>
    </Svg>
  );
};

export default ArrDownIcon;
