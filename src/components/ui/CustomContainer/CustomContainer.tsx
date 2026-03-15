import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps extends ViewProps {
  colorVariant?:
    | 'default'
    | 'lightBlue'
    | 'darkBlue'
    | 'lightGreen'
    | 'darkGreen'
    | 'modal';
}

const CustomContainer = ({
  style,
  colorVariant = 'lightBlue',
  ...rest
}: CustomContainerProps) => {
  return <View style={[styles[colorVariant], style]} {...rest} />;
};

export default CustomContainer;
