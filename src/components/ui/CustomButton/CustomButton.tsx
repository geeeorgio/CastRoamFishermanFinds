import type { PressableProps } from 'react-native';
import { Pressable } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps extends PressableProps {
  variant?: 'default' | 'blue' | 'lightBlue' | 'green';
}

const CustomButton = ({
  style,
  variant = 'blue',
  disabled,
  ...rest
}: CustomButtonProps) => {
  return (
    <Pressable
      style={(state) => [
        variant !== 'default' && styles.container,
        styles[variant],
        typeof style === 'function' ? style(state) : style,
        { opacity: disabled ? 0.6 : 1 },
        { opacity: state.pressed ? 0.5 : 1 },
      ]}
      disabled={disabled}
      {...rest}
    />
  );
};

export default CustomButton;
