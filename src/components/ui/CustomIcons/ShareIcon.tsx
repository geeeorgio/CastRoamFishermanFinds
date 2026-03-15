import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ShareIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 20" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M15.002 13.49a3 3 0 0 0-2.162.924L5.903 10.51a3 3 0 0 0 0-1.54l6.937-3.903a2.99 2.99 0 1 0-.737-1.307L5.165 7.664a3 3 0 1 0 0 4.153l6.938 3.903a3 3 0 1 0 2.899-2.23"
      ></Path>
    </Svg>
  );
};

export default ShareIcon;
