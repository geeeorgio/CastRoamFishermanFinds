import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const MapIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 20 24" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="m8.828 22.94-.288-.196a27 27 0 0 1-4-3.424C2.4 17.078 0 13.716 0 9.749 0 4.867 3.962 0 9.75 0s9.75 4.868 9.75 9.75c0 3.967-2.4 7.329-4.54 9.569a27 27 0 0 1-4 3.424 10 10 0 0 1-.288.195c-.304.203-.615.395-.922.59-.307-.195-.618-.387-.922-.588m.922-10.19a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      ></Path>
    </Svg>
  );
};

export default MapIcon;
