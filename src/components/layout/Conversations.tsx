import React, { useEffect, useState } from "react";
import { SearchBarInput } from "../ui/Input/UsersBarInput";

import { Conversation } from "./Conversation";
import { UsersData } from "../../utils/constants";
import UserButtonShimmer from "./Shimmer";

interface User {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount: number;
}

const Conversations: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = (): void => {
    const res = UsersData;
    setUsers(res);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers();
    }, 1000);

    // cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="p-4">
        <h2 className="mb-4 hidden md:block">Messages</h2>

        <SearchBarInput />
      </div>

      {/* Scroll Area */}
      <div className="relative flex-1">
        <div className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1">
          <div className=" p-2">
            {users.length === 0
              ? Array.from({ length: 5 }).map((_, i) => (
                  <UserButtonShimmer key={i} />
                ))
              : users.map((user) => <Conversation key={user.id} {...user} />)}

          </div>
        </div>
      </div>
    </>
  );
};

export default Conversations;
