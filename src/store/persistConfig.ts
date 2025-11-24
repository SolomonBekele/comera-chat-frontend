import storage from 'redux-persist/lib/storage';
import { createFilter } from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// Only persist user and token from profile slice
const profileFilter = createFilter('profile', ['user', 'token']);

// Only persist conversations array
const conversationsFilter = createFilter('conversations', ['conversations']);

export const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['profile', 'conversations'], // slices to persist
  transforms: [
    profileFilter,
    conversationsFilter,
  ],
};
