import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "../pages/home/HomePage";
import { MenuPage } from "../pages/menu/MenuPage";
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
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/configuration",
        element: <ConfigurationPage />,
      },
    ],
  },
]);
