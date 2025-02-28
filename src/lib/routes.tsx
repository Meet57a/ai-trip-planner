import MainLayout from "@/layouts/main-layout";
import Auth from "@/pages/auth";
import CreateTrip from "@/pages/create-trip";
import LandingPage from "@/pages/landing-page";
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
            }
        ]
    }

]);

export default routes;