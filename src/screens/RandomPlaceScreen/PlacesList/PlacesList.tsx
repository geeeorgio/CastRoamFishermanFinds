import { useNavigation } from '@react-navigation/native';
import { useCallback, useRef } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { FlatList, View } from 'react-native';

import PlaceItem from '../PlaceItem/PlaceItem';

import { styles } from './styles';

import type { MainStackNavigationProp, PLACE_INFO_TYPE } from 'src/types';

interface PlacesListProps {
  places: PLACE_INFO_TYPE[];
  handleShowDetails: (placeId: string) => void;
}

const PlacesList = ({ places, handleShowDetails }: PlacesListProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const renderItem = useCallback(
    ({ item }: { item: PLACE_INFO_TYPE }) => {
      return <PlaceItem place={item} handleShowDetails={handleShowDetails} />;
    },
    [handleShowDetails],
  );

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
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
      keyboardDismissMode="on-drag"
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
      ListFooterComponent={() => <View style={styles.footer} />}
    />
  );
};

export default PlacesList;
