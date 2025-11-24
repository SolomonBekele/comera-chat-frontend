export interface ConversationsState {
  conversations: Array<any>;
  isConversationsFetched: boolean;
  getConversationsLoading: boolean;
  isConversationsUpdated: boolean;
  isConversationsDeleted: boolean;
}