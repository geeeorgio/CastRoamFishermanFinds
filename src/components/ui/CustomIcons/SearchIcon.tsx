import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const SearchIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 20 20" {...props}>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4.343-4.343m0 0A8 8 0 1 0 3.345 3.344a8 8 0 0 0 11.312 11.313"
      ></Path>
    </Svg>
  );
};

export default SearchIcon;
