import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';

import App from "./App.jsx";
import "./index.css";

//import all pages
import Dashboard from "./pages/Dashboard.jsx";
import Explore from "./pages/Explore.jsx";
import Exercise from "./pages/Exercises.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Signup.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
        {
            index: true,
            element: <Dashboard />,
        },
        {
            path: "/login",
            element: <LogIn />,
        },
        {
            path: "/signup",
            element: <Register />,
        },
        {
            path: "/excercises",
            element: <Exercise />,
        },
        {
            path: "/explore",
            element: <Explore />,
        },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ApolloProvider client={client}>
        <RouterProvider router={router}>
            <NextUIProvider>
                <main className="dark text-foreground bg-background">
                    <App />
                </main>
            </NextUIProvider>
        </RouterProvider>
    </ApolloProvider>
);
