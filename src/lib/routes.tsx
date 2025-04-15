import HomeLayout from "@/layouts/home-layout";
import MainLayout from "@/layouts/main-layout";
import Auth from "@/pages/auth";
import CreateTrip from "@/pages/create-trip";
import Home from "@/pages/home";
import LandingPage from "@/pages/landing-page";
import RecentPage from "@/pages/recent-page";
import TripPage from "@/pages/trip-page";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                element: <LandingPage />,
                path: "/",
            },
            {
                element: <Auth />,
                path: "/auth",
            },
            {
                element: <CreateTrip />,
                path: "/create-trip",
            },
            {
                element: <HomeLayout />,
                children: [
                    {
                        element: <Home />,
                        path: "/home",
                    },
                    {
                        element: <RecentPage />,
                        path: "/recents",
                    },
                    {
                        element: <TripPage />,
                        path: "/trip",
                    }
                ],
            }
        ]
    }

]);

export default routes;