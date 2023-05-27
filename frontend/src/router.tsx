import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Items } from "./pages/items";
import { Merchants } from "./pages/merchants";
import { MerchantProducts } from "./pages/merchant-products";

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
      path: "/mercados/:id",
      Component: () => <MerchantProducts />,
    },
    {
      path: "/mercados",
      Component: () => <Merchants />,
    },
    {
      path: "/",
      Component: () => <div />,
    },
]);

