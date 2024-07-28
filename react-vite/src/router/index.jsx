// Files
// Functions/Components
import LandingPage from "../pages/landing";
import BuildPage from "../pages/build";
import ViewPage from "../pages/view";
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
        element: <BuildPage />,
      },
      {
        path: "/build/:buildId",
        element: <BuildPage />,
      },
      {
        path: "/browse",
        element: <ViewPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
    ],
  },
]);
