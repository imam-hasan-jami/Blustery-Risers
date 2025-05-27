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
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddOldPlayer from "../pages/AddOldPlayer";
import ManageOldSquad from "../pages/ManageOldSquad";
import OldPlayerDetails from "../pages/OldPlayerDetails";

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
            loader: () => fetch("http://localhost:3000/oldPlayers"),
            hydrateFallbackElement: <Loading />,
            Component: OldSquad,
        },
        {
            path: "/old-player-details/:id",
            loader: ({ params }) => fetch(`http://localhost:3000/oldPlayers/${params.id}`),
            hydrateFallbackElement: <Loading />,
            Component: OldPlayerDetails,
        },
        {
            path: "/manage-old-squad",
            loader: () => fetch("http://localhost:3000/oldPlayers"),
            hydrateFallbackElement: <Loading />,
            Component: ManageOldSquad,
        },
        {
            path: "/add-old-player",
            Component: AddOldPlayer,
        },
        // {
        //     path: "/register",
        //     Component: Register,
        // },
        {
            path: "/login",
            Component: Login,
        }
    ]
  },
]);

export default router;
