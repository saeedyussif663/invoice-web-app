import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import { Toaster } from "react-hot-toast";
import Signin from "./Pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
  {
    path: "/auth/signin",
    element: <Signin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: "green",
            color: "white",
          },
        },
        error: {
          style: {
            background: "red",
            color: "white",
          },
        },
      }}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
