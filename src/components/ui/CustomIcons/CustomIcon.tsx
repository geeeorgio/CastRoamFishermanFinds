import type { SvgProps } from 'react-native-svg';

import type { IconName } from './iconsMap';
import { ICONS_MAP } from './iconsMap';

interface CustomIconProps extends SvgProps {
  name: IconName;
}
const CustomIcon = ({ name, ...rest }: CustomIconProps) => {
  const IconComponent = ICONS_MAP[name];

  return <IconComponent {...rest} />;
};

export default CustomIcon;
