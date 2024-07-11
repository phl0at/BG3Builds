import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../components/LandingPage";
import CreateBuildPage from "../components/CreatePage/CreateParent";
import EditBuildPage from "../components/EditPage/EditParent";
import ViewBuildPage from "../components/ViewPage/ViewParent";
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
