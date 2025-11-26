
import localForage from "localforage";
import { createFilter } from "redux-persist-transform-filter";

export const conversationsFilter = createFilter(
  "conversations",
  ["conversations", "status"],
  { reduce: true }  // <-- IMPORTANT!
);


 
export const userPersistConfig = {
  key: "user",
  storage: localForage,
};
 
export const conversationsPersistConfig = {
  key: "conversations",
  storage: localForage,
  transforms: [conversationsFilter],
};
 
// export const messagesPersistConfig = {
//   key: "messages",
//   storage: localForage,
// };

 