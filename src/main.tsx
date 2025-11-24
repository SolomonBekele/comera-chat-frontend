import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { Provider } from "react-redux";
import {store}from "./store/index.ts";
// import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      <BrowserRouter>
        <StrictMode>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </StrictMode>
      </BrowserRouter>
  </Provider>
);
