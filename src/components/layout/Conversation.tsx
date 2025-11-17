interface ConversationProps {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount: number;
}

export const Conversation = ({
  name,
  avatar,
  lastMessage,
  timeAgo,
  unreadCount,
}: ConversationProps) => {
  return (
    <button className="w-full p-3 rounded-lg text-left hover:bg-gray-50 transition-colors flex items-start gap-3">
      {/* Avatar */}
      <span
        data-slot="avatar"
        className="relative flex size-10 shrink-0 overflow-hidden rounded-full"
      >
        <img
          data-slot="avatar-image"
          className="aspect-square size-full"
          alt={name}
          src={avatar}
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
            <span className="inline-flex items-center justify-center rounded-md py-0.5 font-medium w-fit whitespace-nowrap shrink-0 ml-2 bg-teal-500 hover:bg-teal-600 text-xs px-2 text-white">
              {unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};
