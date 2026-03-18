import { useNavigation } from '@react-navigation/native';
import { useCallback, useRef } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { FlatList, View } from 'react-native';

import LearnListItem from '../LearnListItem/LearnListItem';

import { styles } from './styles';

import { FACTS_LIST } from 'src/constants';
import type { Fact_Type, MainStackNavigationProp } from 'src/types';

const LearnList = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const renderItem = useCallback(({ item }: { item: Fact_Type }) => {
    return <LearnListItem item={item} />;
  }, []);

  const lastOffsetRef = useRef(0);
  const isHideRef = useRef(false);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.y;
      const isScrollingDown = currentOffset > lastOffsetRef.current;

      if (currentOffset <= 0 && isHideRef.current) {
        isHideRef.current = false;
        navigation.setOptions({
          tabBarStyle: { display: 'flex' },
        });
      }

      if (Math.abs(currentOffset - lastOffsetRef.current) < 10) return;

      if (isScrollingDown && !isHideRef.current) {
        isHideRef.current = true;
        navigation.setOptions({
          tabBarStyle: { display: 'none' },
        });
      } else if (!isScrollingDown && isHideRef.current) {
        isHideRef.current = false;
        navigation.setOptions({
          tabBarStyle: { display: 'flex' },
        });
      }

      lastOffsetRef.current = currentOffset;
    },
    [navigation],
  );

  return (
    <FlatList
      data={FACTS_LIST}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={() => <View style={styles.footer} />}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
};

export default LearnList;
