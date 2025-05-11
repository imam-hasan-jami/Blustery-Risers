import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {
            index: true,
            Component: Home,
            loader: () => fetch("/players.json"),
            hydrateFallbackElement: <Loading />,
        }
    ]
  },
]);

export default router;
