import React from 'react';
import { createBrowserRouter, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Projetos from '../pages/Projetos';
import Contato from '../pages/Contato';

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/projetos",
    element: <Projetos />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  }
]);

export default AllRoutes;