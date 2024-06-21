import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../components/Home';
import CreateBuildPage from '../components/Build/Create'
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/build",
        element: <CreateBuildPage />,
      },
    ],
  },
]);
