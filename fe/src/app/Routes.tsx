import { createBrowserRouter } from "react-router";
import { WaiterPage } from "../pages/waiter/WaiterPage";
import { KitchenPage } from "../pages/kitchen/KitchenPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <WaiterPage />,
  },
  {
    path: "/kitchen",
    element: <KitchenPage />,
  },
]);
