import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface CustomHeaderProps {
  title: string;
  onGoBack?: () => void;
}

const CustomHeader = ({ title, onGoBack }: CustomHeaderProps) => {
  return (
    <CustomContainer colorVariant="lightBlue" style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
    </CustomContainer>
  );
};

export default CustomHeader;
