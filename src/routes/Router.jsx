import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Loading from "../pages/Loading";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage />,
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
