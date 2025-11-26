import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./Profile/userSlice";
import conversationsReducer from "./Conversations/conversationSlice";
import messageReducer from "./Messages/messageSlice";


import {
  userPersistConfig,
  conversationsPersistConfig,

} from "./persistConfig";

 
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  conversations: persistReducer(conversationsPersistConfig, conversationsReducer),
  messages:  messageReducer,
});
 
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
 
export const persistor = persistStore(store);
 
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;