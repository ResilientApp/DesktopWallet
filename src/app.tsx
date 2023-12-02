import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MantineProvider } from '@mantine/core';
import { createRoot } from "react-dom/client";
import {
    createHashRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import DAppDirectory from "./pages/DAppDirectory";

const router = createHashRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/register",
        element: <Register />,
    },
<<<<<<< HEAD
    {
        path: '/dapp-directory',
        element: <DAppDirectory />
    }
=======
    // { path: "/send-coins", element: <SendCoins /> },
>>>>>>> dashboard
]);

const root = createRoot(document.body);
root.render(
    <MantineProvider>
        <RouterProvider router={router} />{" "}
    </MantineProvider>
);
