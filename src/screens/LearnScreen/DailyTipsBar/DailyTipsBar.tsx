import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomIcon, CustomText } from 'src/components';
import { BAR_FRAME, COLORS, ONBD_IMAGES } from 'src/constants';
import { usePersistContext } from 'src/hooks/usePersistContext';
import {
  calculateTimeLeft,
  formatMsToTime,
  handleShare,
  hp,
  wp,
} from 'src/utils';

interface DailyTipsBarProps {
  onTipPress: () => void;
}

const DailyTipsBar = ({ onTipPress }: DailyTipsBarProps) => {
  const { canGetNewTip, persistedTipsTimestamp, persistedTip } =
    usePersistContext();

  const [timeLeft, setTimeLeft] = useState<number>(
    calculateTimeLeft(persistedTipsTimestamp),
  );

  const isAvailable = canGetNewTip || timeLeft <= 0;

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    if (!canGetNewTip) {
      setTimeLeft(calculateTimeLeft(persistedTipsTimestamp));

      timer = setInterval(() => {
        const diff = calculateTimeLeft(persistedTipsTimestamp);
        if (diff <= 0) {
          setTimeLeft(0);

          if (timer) clearInterval(timer);
        } else {
          setTimeLeft(diff);
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [canGetNewTip, persistedTipsTimestamp]);

  return (
    <ImageBackground
      source={BAR_FRAME}
      style={styles.container}
      resizeMode="stretch"
    >
      <View style={styles.mainContent}>
        <View style={styles.textContainer}>
          <View style={styles.textImgContainer}>
            <Image
              source={ONBD_IMAGES.onbd3}
              style={styles.textImg}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textDescriptionContainer}>
            <CustomText style={styles.textTitle}>Daily Tip</CustomText>
            <CustomText
              style={[
                styles.textDescription,
                !persistedTip && styles.textNotAvailable,
              ]}
            >
              {persistedTip ? persistedTip.text : 'Press to get a new tip'}
            </CustomText>
          </View>
        </View>

        <View style={styles.btnsContainer}>
          <CustomButton
            variant="default"
            onPress={onTipPress}
            style={styles.tipBtn}
            disabled={!isAvailable}
          >
            <CustomText style={styles.tipBtnText}>
              {isAvailable ? 'New Tip' : formatMsToTime(timeLeft)}
            </CustomText>
          </CustomButton>
          <CustomButton
            variant="lightBlue"
            onPress={handleShare}
            style={styles.shareBtn}
          >
            <CustomIcon
              name="share"
              width={wp(20)}
              height={hp(20)}
              color={COLORS.white}
            />
          </CustomButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DailyTipsBar;
