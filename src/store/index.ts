import { combineReducers,configureStore, } from "@reduxjs/toolkit";
// import type {Middleware} from "@reduxjs/toolkit"
import userReducer from "./Profile/userSlice"; // adjust path
import conversationsReducer from "./Conversations/conversationSlice";
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import type { PersistConfig } from "redux-persist";
import { persistConfig } from './persistConfig';
/*
const reducer = combineReducers({
user: userReducer,
conversations:conversationsReducer
})

// Type the root state
type CombinedRootState = ReturnType<typeof reducer>;

// Create properly typed persist config
const typedPersistConfig: PersistConfig<CombinedRootState> = persistConfig;

const persistedReducer = persistReducer(typedPersistConfig, reducer);

// Create logger middleware
// const logger = createLogger({
//   collapsed: true, // Collapse log groups for better readability
// }) as Middleware;

// / Configure the store

const store = configureStore({
  reducer: persistedReducer})

// Persistor (to use in <PersistGate>)
export const persistor = persistStore(store);

// Export types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
*/

export const store = configureStore({
  reducer: {
    user: userReducer,
    conversations: conversationsReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
