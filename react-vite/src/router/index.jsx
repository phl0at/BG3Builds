import { createBrowserRouter } from 'react-router-dom';

import LandingPage from '../components/Landing';
import CreateBuildPage from '../components/Build/Parent'
// import EditBuildPage from '../components/Build/Edit'
import Layout from './Layout';

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
        path: "/edit",
        // element: <EditBuildPage />,
      },
    ],
  },
]);
