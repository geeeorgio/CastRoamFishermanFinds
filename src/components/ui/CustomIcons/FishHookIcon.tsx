import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const FishHookIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 21 18" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M14.25 1.501a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2.5 1c0 1.12-.736 2.067-1.75 2.386v2.364a2.25 2.25 0 0 0 4.5 0v-.25h-1.25a.75.75 0 0 1-.53-1.28l2-2a.75.75 0 0 1 1.28.53v3a3.75 3.75 0 0 1-7.5 0V4.887a2.5 2.5 0 1 1 3.25-2.386m-5.965-.5H3.25l-.186.005a3.25 3.25 0 0 0-3.048 2.92L10 10.155l2.733-1.433a4.8 4.8 0 0 1-.233-1.472V5.533a3.5 3.5 0 0 1-1.715-3.532m2.632 8.057-3.069 1.607a.75.75 0 0 1-.696 0L0 6.61v8.142l.005.184a3.25 3.25 0 0 0 3.245 3.066h13.5l.184-.005A3.25 3.25 0 0 0 20 14.751v-3.627a4.73 4.73 0 0 1-2.75.877 4.74 4.74 0 0 1-3.833-1.944"
      ></Path>
    </Svg>
  );
};

export default FishHookIcon;
