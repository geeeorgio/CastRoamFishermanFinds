import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { handleShare } from 'src/utils';

interface HeaderModalProps {
  onClick: () => void;
}

const HeaderModal = ({ onClick }: HeaderModalProps) => {
  return (
    <CustomContainer colorVariant="lightBlue" style={styles.container}>
      <CustomButton
        variant="default"
        style={styles.button}
        onPress={handleShare}
      >
        <CustomText style={styles.title}>Share the App</CustomText>
      </CustomButton>
      <CustomButton variant="default" onPress={onClick} style={styles.button}>
        <CustomText style={styles.title}>Pick a vibe</CustomText>
      </CustomButton>
    </CustomContainer>
  );
};

export default HeaderModal;
