export const STORAGE_KEYS = ['is_onboarding_completed', 'saved_tips'] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
