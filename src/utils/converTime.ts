export const formatSecondsToTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = Math.floor(totalSeconds % 60);

  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const formatMsToTime = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);

  return formatSecondsToTime(seconds);
};

export const calculateTimeLeft = (timestamp: number) => {
  const nextAvailable = timestamp + 24 * 60 * 60 * 1000;
  const diff = nextAvailable - Date.now();

  return diff > 0 ? diff : 0;
};
