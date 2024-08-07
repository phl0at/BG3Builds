// Files
import "../index.css";
// Functions/Components
import Layout from "./Layout";
// Packages
import { GridLoader } from "react-spinners";
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const LandingPage = lazy(() => import("../pages/landing"));
const BuildPage = lazy(() => import("../pages/build"));
const ViewPage = lazy(() => import("../pages/view"));
const FAQPage = lazy(() => import("../pages/faq"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <GridLoader
                size="30px"
                className="suspense"
                color="rgb(21, 16, 14, 0.92)"
              />
            }
          >
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/create",
        element: (
          <Suspense
            fallback={
              <GridLoader
                size="30px"
                className="suspense"
                color="rgb(21, 16, 14, 0.92)"
              />
            }
          >
            <BuildPage />
          </Suspense>
        ),
      },
      {
        path: "/build/:buildId",
        element: (
          <Suspense
            fallback={
              <GridLoader
                size="30px"
                className="suspense"
                color="rgb(21, 16, 14, 0.92)"
              />
            }
          >
            <BuildPage />
          </Suspense>
        ),
      },
      {
        path: "/browse",
        element: (
          <Suspense
            fallback={
              <GridLoader
                size="30px"
                className="suspense"
                color="rgb(21, 16, 14, 0.92)"
              />
            }
          >
            <ViewPage />
          </Suspense>
        ),
      },
      {
        path: "/faq",
        element: (
          <Suspense
            fallback={
              <GridLoader size="30px" className="suspense" color="#e4c274" />
            }
          >
            <FAQPage />
          </Suspense>
        ),
      },
    ],
  },
]);
