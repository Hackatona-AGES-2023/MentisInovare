import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Items } from "./pages/items";
import { Merchants } from "./pages/merchants";
import { MerchantProducts } from "./pages/merchant-products";
import { ItemsRecommendation } from "./pages/items-recommendation";

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
      path: "/items/recomendacao",
      Component: () => <ItemsRecommendation />,
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
      Component: () => <Navigate to='/login' />,
    },
]);

