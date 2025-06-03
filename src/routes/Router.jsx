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
import UpdateOldPlayer from "../pages/UpdateOldPlayer";
import PrivateRoute from "../provider/PrivateRoute";
import RegisterPlayer from "../pages/RegisterPlayer";
import ManagePlayers from "../pages/ManagePlayers";
import UpdatePlayer from "../pages/UpdatePlayer";

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
              const playersResponse = await fetch("https://blustery-risers-server.vercel.app/players");
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
            path: "/register-player",
            Component: RegisterPlayer,
        },
        {
            path: "/manage-players",
            loader: () => fetch("https://blustery-risers-server.vercel.app/players"),
            hydrateFallbackElement: <Loading />,
            element: <PrivateRoute><ManagePlayers /></PrivateRoute>,
        },
        {
            path: "/update-player/:id",
            loader: ({ params }) => fetch(`https://blustery-risers-server.vercel.app/players/${params.id}`),
            hydrateFallbackElement: <Loading />,
            element: <PrivateRoute><UpdatePlayer /></PrivateRoute>,
        },
        {
            path: "/old-squad",
            loader: () => fetch("https://blustery-risers-server.vercel.app/oldPlayers"),
            hydrateFallbackElement: <Loading />,
            Component: OldSquad,
        },
        {
            path: "/old-player-details/:id",
            loader: ({ params }) => fetch(`https://blustery-risers-server.vercel.app/oldPlayers/${params.id}`),
            hydrateFallbackElement: <Loading />,
            Component: OldPlayerDetails,
        },
        {
            path: "/manage-old-squad",
            loader: () => fetch("https://blustery-risers-server.vercel.app/oldPlayers"),
            hydrateFallbackElement: <Loading />,
            element: <PrivateRoute><ManageOldSquad /></PrivateRoute>,
        },
        {
            path: "/add-old-player",
            // element: <PrivateRoute><AddOldPlayer /></PrivateRoute>,
            Component: AddOldPlayer,
        },
        {
            path: "/update-old-player/:id",
            loader: ({ params }) => fetch(`https://blustery-risers-server.vercel.app/oldPlayers/${params.id}`),
            hydrateFallbackElement: <Loading />,
            element: <PrivateRoute><UpdateOldPlayer /></PrivateRoute>,
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
