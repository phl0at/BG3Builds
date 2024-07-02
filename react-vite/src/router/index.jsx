import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../components/Landing";
import CreateBuildPage from "../components/Build/Pages/CreatePage/CreateParent";
import EditBuildPage from "../components/Build/Pages/EditPage/EditParent";
import ViewBuildPage from "../components/Build/Pages/ViewPage/ViewParent";
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
        element: <ViewBuildPage/>,
      },
    ],
  },
]);
