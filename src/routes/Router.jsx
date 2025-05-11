import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Loading from "../pages/Loading";
import ErrorPage from "../pages/ErrorPage";
import PlayerDetails from "../pages/PlayerDetails";
import Fixture from "../pages/Fixture";
import Jersey from "../pages/Jersey";
import Achievements from "../pages/Achievements";
import OldSquad from "../pages/OldSquad";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            Component: Home,
            loader: async () => {
              const playersResponse = await fetch("/players.json");
              const players = await playersResponse.json();
              
              const reviewsResponse = await fetch("/reviews.json");
              const reviews = await reviewsResponse.json();
              
              return { players, reviews };
            },
            hydrateFallbackElement: <Loading />,
        },
        {
            path: "/player-details/:id",
            Component: PlayerDetails,
            loader: () => fetch("/players.json"),
            hydrateFallbackElement: <Loading />,
        },
        {
            path: "/fixture",
            Component: Fixture,
        },
        {
            path: "/jersey",
            Component: Jersey,
        },
        {
            path: "/achievements",
            Component: Achievements,
        },
        {
            path: "/old-squad",
            Component: OldSquad,
        }
    ]
  },
]);

export default router;
