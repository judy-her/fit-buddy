import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//import all pages
import Dashboard from "./pages/Dashboard.jsx";
import Explore from "./pages/Explore.jsx";
import Excercises from "./pages/Excercises.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LogIn from "./pages/LogIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "/excercises",
        element: <Excercises />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);