// Files
// Functions/Components
import LandingPage from "../pages/landing";
import CreateBuildPage from "../pages/create";
import EditBuildPage from "../pages/edit";
import ViewBuildPage from "../pages/view";
import FAQPage from "../pages/faq";
import Layout from "./Layout";
// Packages
import { createBrowserRouter } from "react-router-dom";



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
      {
        path: "/faq",
        element: <FAQPage />,
      },
    ],
  },
]);
