// Files
import "./index.css";
// Functions/Components
import ErrorBoundary from "./components/error/ErrorBoundary";
import { ErrorMessage } from "./components/error/Error";
import configureStore from "./redux/store";
import { router } from "./router";
import * as sessionActions from "./redux/session";
// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

const store = configureStore();

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorMessage />}>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
