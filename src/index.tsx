import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastProvider } from "./context/ToastContext";

import App from "./App";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import CountUp from "./pages/count-up";
import Login from "./pages/login";
import ErrorPage from "./routes/error-page";
import Root from "./routes/root";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/count-up",
        element: <CountUp />,
      },
    ],
  },
  { path: "/blog", element: <Blog /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </React.StrictMode>
);
