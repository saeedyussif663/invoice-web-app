import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to="/signup">Signup</Link>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
