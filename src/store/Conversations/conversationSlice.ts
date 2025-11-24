import { createSlice } from "@reduxjs/toolkit";
import type {  PayloadAction } from "@reduxjs/toolkit";
import { fetchConversations } from "./conversationThunk";

// Conversation interface
export interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount: number;
}

interface ConversationsState {
  conversations: Conversation[];
  status: "idle" | "loading" | "failed";
  error?: string;
}

const initialState: ConversationsState = {
  conversations: [],
  status: "idle",
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConversations.fulfilled, (state, action: PayloadAction<Conversation[]>) => {
        state.status = "idle";
        state.conversations = action.payload;
      })
      .addCase(fetchConversations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default conversationsSlice.reducer;
