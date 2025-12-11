import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store";
import { fetchMessages } from "../../../store/Messages/messageApi";
import { setSelectedConversation } from "../../../store/Conversations/conversationSlice";

interface ConversationProps {
  id: number;
  name: string;
  profile_picture: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount: number;
  isActive: boolean; // <-- NEW
}

export const Conversation = ({
  id,
  name,
  profile_picture,
  lastMessage,
  timeAgo,
  unreadCount,
  isActive,
}: ConversationProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddMessages = (userId: number) => {
    const conversation = {
      id,
      name,
      profile_picture,
      lastMessage,
      timeAgo,
      unreadCount,
    };

    dispatch(fetchMessages(userId));
    dispatch(setSelectedConversation(conversation));
  };

  return (
    <button
      onClick={() => handleAddMessages(id)}
      className={`w-full p-3 rounded-lg text-left flex items-start gap-3 transition-colors 
        ${isActive ? "bg-teal-50" : "hover:bg-gray-50"}`}
    >
      {/* Avatar */}
      <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full">
        <img
          className="aspect-square size-full"
          alt={name}
          src={profile_picture}
        />
      </span>

      <div className="flex-1 min-w-0">
        {/* Name + time */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-900 truncate">{name}</span>
          <span className="text-xs text-gray-500">{timeAgo}</span>
        </div>

        {/* Message + unread badge */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 truncate">{lastMessage}</p>

          {unreadCount > 0 && (
            <span className="inline-flex items-center justify-center rounded-md py-0.5 font-medium ml-2 bg-teal-500 text-xs px-2 text-white">
              {unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};
