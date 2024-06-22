import { createBrowserRouter } from 'react-router-dom';

import LandingPage from '../components/Landing';
import CreateBuildPage from '../components/Build/CreatePage/Parent'
import EditBuildPage from '../components/Build/EditPage/Parent'
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
        path: "/edit/:buildId",
        element: <EditBuildPage />,
      },
    ],
  },
]);
