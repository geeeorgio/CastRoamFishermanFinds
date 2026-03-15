import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';

import CustomContainer from '../CustomContainer/CustomContainer';
import { TAB_BAR_ICONS_MAP } from '../CustomIcons/iconsMap';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import type { MainStackParamList } from 'src/types';
import { wp } from 'src/utils';

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { buildHref } = useLinkBuilder();

  return (
    <CustomContainer colorVariant="tabBar" style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const routeName = route.name as keyof MainStackParamList;
        const Icon = TAB_BAR_ICONS_MAP[routeName];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.btn, isFocused && styles.activeBtn]}
          >
            <Icon color={COLORS.white} width={wp(24)} height={wp(24)} />
          </PlatformPressable>
        );
      })}
    </CustomContainer>
  );
};

export default CustomTabBar;
