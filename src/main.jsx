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
    path: "/",
    element: <App />,
  },
  {
    path: "Berinjela",
    element: <Berinjela />,
  },
  {
    path: "Molho de Pimenta",
    element: <Pimenta />,
  },
  {
    path: "Confit de Tomate",
    element: <Confit />,
  },
  {
    path: "Geleia de Abacaxi",
    element: <Geleia />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
