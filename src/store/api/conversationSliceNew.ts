import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ConversationsState } from "../Conversations/types";
import { getConversations } from "./conversationApi";

export const initialState: ConversationsState = {
  conversations: [],
  isConversationsFetched: false,
  getConversationsLoading: false,
  isConversationsUpdated: false,
  isConversationsDeleted: false,
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getConversations.pending, (state) => {
        state.isConversationsFetched = false;
        state.getConversationsLoading = true;
      })
      .addCase(
        getConversations.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.conversations = action.payload;
          state.isConversationsFetched = true;
          state.getConversationsLoading = false;
          state.isConversationsUpdated = false;
          state.isConversationsDeleted = false;
        }
      )
      .addCase(getConversations.rejected, (state) => {
        state.isConversationsFetched = true;
        state.getConversationsLoading = false;
      });
  },
});

export default conversationsSlice.reducer;
