import { Modal, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { COLORS } from 'src/constants';
import { usePersistContext } from 'src/hooks/usePersistContext';
import type { GAME_STATUS_TYPE } from 'src/types';

interface GameModalProps {
  visible: boolean;
  status: GAME_STATUS_TYPE;
  score: number;
  onResume: () => void;
  onRestart: () => void;
  onExit: () => void;
}

const GameModal = ({
  visible,
  onResume,
  onRestart,
  onExit,
  status,
  score,
}: GameModalProps) => {
  const { persistedTopScore } = usePersistContext();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      style={styles.modal}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <CustomContainer colorVariant="modal" style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <CustomText style={styles.title}>
              {status === 'paused' ? 'Paused' : 'Game Over'}
            </CustomText>
            <CustomText style={styles.description}>
              {status === 'paused'
                ? 'Catch your breath — the next item won’t wait'
                : `Your Score: ${score} \n Best Score: ${persistedTopScore}`}
            </CustomText>
          </View>

          <View style={styles.buttonsContainer}>
            <CustomButton
              variant="default"
              onPress={onExit}
              style={styles.exitButton}
            >
              <CustomText
                style={[
                  styles.exitButtonText,
                  status === 'paused'
                    ? { color: COLORS.red }
                    : { color: COLORS.blue_text },
                ]}
              >
                {status === 'paused' ? 'Leave' : 'Home'}
              </CustomText>
            </CustomButton>
            <CustomButton
              variant="default"
              onPress={status === 'paused' ? onResume : onRestart}
              style={styles.stayButton}
            >
              <CustomText style={styles.stayButtonText}>
                {status === 'paused' ? 'Resume' : 'Play Again'}
              </CustomText>
            </CustomButton>
          </View>
        </CustomContainer>
      </View>
    </Modal>
  );
};

export default GameModal;
