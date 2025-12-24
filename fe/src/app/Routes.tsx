import { createBrowserRouter } from "react-router";
import { WaiterPage } from "../pages/waiter/WaiterPage";
import { KitchenPage } from "../pages/kitchen/KitchenPage";
import { HistoryPage } from "../pages/history/HistoryPage";
import { MenuPage } from "../pages/menu/MenuPage";
import { RootLayout } from "./layouts/RootLayout";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <WaiterPage />,
      },
      {
        path: "/kitchen",
        element: <KitchenPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
]);
