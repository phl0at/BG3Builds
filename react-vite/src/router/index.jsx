// Files
// Functions/Components
/*
import LandingPage from "../pages/landing"
import ViewPage from "../pages/view"
import BuildPage from "../pages/build"
import FAQPage from "../pages/faq"
*/
import Layout from "./Layout";
// Packages
import { PulseLoader } from "react-spinners";
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
          <Suspense fallback={<PulseLoader color="#e4c274" />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/create",
        element: (
          <Suspense fallback={<PulseLoader color="#e4c274" />}>
            <BuildPage />
          </Suspense>
        ),
      },
      {
        path: "/build/:buildId",
        element: (
          <Suspense fallback={<PulseLoader color="#e4c274" />}>
            <BuildPage />
          </Suspense>
        ),
      },
      {
        path: "/browse",
        element: (
          <Suspense fallback={<PulseLoader color="#e4c274" />}>
            <ViewPage />
          </Suspense>
        ),
      },
      {
        path: "/faq",
        element: (
          <Suspense fallback={<PulseLoader color="#e4c274" size="20px" />}>
            <FAQPage />
          </Suspense>
        ),
      },
    ],
  },
]);
