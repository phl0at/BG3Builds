import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../pages/landing";
import CreateBuildPage from "../pages/create";
import EditBuildPage from "../pages/edit";
import ViewBuildPage from "../pages/view";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/create",
        element: <CreateBuildPage />,
      },
      {
        path: "/build/:buildId",
        element: <EditBuildPage />,
      },
      {
        path: "/browse",
        element: <ViewBuildPage />,
      },
    ],
  },
]);
