import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import { Toaster } from "react-hot-toast";
// import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
// import ResetPassword from "./Pages/ResetPassword";
// import ResetPasswordMessage from "./components/ResetPasswordMessage";
// import ResetPasswordForm from "./Pages/ResetPasswordForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   path: "/auth/signin",
  //   element: <Signin />,
  // },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  // {
  //   path: "/forgot_password",
  //   element: <ResetPassword />,
  // },
  // {
  //   path: "/reset_password/:token",
  //   element: <ResetPasswordForm />,
  // },
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
