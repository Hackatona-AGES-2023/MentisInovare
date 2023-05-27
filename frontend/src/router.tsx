import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Items } from "./pages/items";

export const router = createBrowserRouter([
    {
      path: "/login",
      Component: () => <Login />,
    },
    {
      path: "/register",
      Component: () => <Register />,
    },
    {
      path: "/items",
      Component: () => <Items />,
    },
    {
      path: "/",
      Component: () => <div />,
    },
]);

