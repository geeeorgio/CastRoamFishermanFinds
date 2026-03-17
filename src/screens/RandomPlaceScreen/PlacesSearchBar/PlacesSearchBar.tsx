import { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import SearchIcon from 'src/components/ui/CustomIcons/SearchIcon';
import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

interface PlacesSearchBarProps {
  setFilter: (filter: string) => void;
}

const PlacesSearchBar = ({ setFilter }: PlacesSearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);

    setFilter(text);
  };

  const handleResetFilter = () => {
    setSearchQuery('');
    setFilter('');
  };

  return (
    <View style={styles.container}>
      <CustomButton variant="default" disabled style={styles.searchButton}>
        <SearchIcon width={wp(20)} height={hp(20)} color={COLORS.white} />
      </CustomButton>
      <TextInput
        style={styles.input}
        placeholder="Type a spot name or country"
        placeholderTextColor={COLORS.input_text}
        value={searchQuery}
        returnKeyType="search"
        onChangeText={handleSearch}
        maxLength={50}
        autoCorrect={false}
        autoCapitalize="words"
        spellCheck={false}
      />

      {searchQuery && (
        <CustomButton
          variant="default"
          onPress={handleResetFilter}
          style={styles.resetButton}
        >
          <CustomText style={styles.resetText}>X</CustomText>
        </CustomButton>
      )}
    </View>
  );
};

export default PlacesSearchBar;
