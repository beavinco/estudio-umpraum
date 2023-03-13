import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/allRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <RouterProvider router={AllRoutes} />
  </React.Fragment>
);