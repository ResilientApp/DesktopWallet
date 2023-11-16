import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createRoot } from "react-dom/client";
import {
    createHashRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";

const router = createHashRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/signin",
        element: <SignIn/>
    }
]);

const root = createRoot(document.body);
root.render(<RouterProvider router={router} />);
