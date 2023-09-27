import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Berinjela from './Products/Berinjela.jsx'
import Pimenta from './Products/Pimenta.jsx'
import Confit from './Products/Confit.jsx'
import Geleia from './Products/Geleia.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/e-comerce_site",
    element: <App />,
  },
  {
    path: "/e-comerce_site/Berinjela",
    element: <Berinjela />,
  },
  {
    path: "/e-comerce_site/Molho de Pimenta",
    element: <Pimenta />,
  },
  {
    path: "/e-comerce_site/Confit de Tomate",
    element: <Confit />,
  },
  {
    path: "/e-comerce_site/Geleia de Abacaxi",
    element: <Geleia />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
