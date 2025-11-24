import { createAsyncThunk } from "@reduxjs/toolkit";

import { LOCAL_URL, USER_API } from "../../utils/constants";

// Fetch all conversations
export const getConversations = createAsyncThunk( 
    LOCAL_URL+USER_API,
    async () => {
      const response = await fetch(`${LOCAL_URL}${USER_API}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`, // 
        },
      });
      return response
  }
);