export const STORAGE_KEYS = [
  'is_onboarding_completed',
  'saved_tips',
  'saved_bckgd',
] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
