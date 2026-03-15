import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const CatchIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 20 20" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M13 5.5V0H7v5.5l3 3zM5.5 7H0v6h5.5l3-3zM7 14.5V20h6v-5.5l-3-3zM14.5 7l-3 3 3 3H20V7z"
      ></Path>
    </Svg>
  );
};

export default CatchIcon;
