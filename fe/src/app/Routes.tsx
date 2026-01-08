import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "../pages/home/HomePage";
import { WaiterPage } from "../pages/waiter/WaiterPage";
import { ConfigurationPage } from "../pages/configuration/MenuPage";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pedido",
        element: <WaiterPage />,
      },
      {
        path: "/configuration",
        element: <ConfigurationPage />,
      },
    ],
  },
]);
