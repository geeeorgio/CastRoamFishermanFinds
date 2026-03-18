export const STORAGE_KEYS = [
  'is_onboarding_completed',
  'saved_timestamp',
  'saved_tip',
  'saved_bckgd',
  'saved_top_score',
] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
