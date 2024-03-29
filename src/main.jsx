import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import{
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";
import Footer from './component/Footer/Footer.jsx';
import Home from './component/Home/Home.jsx';
import Root from './component/Root/Root.jsx';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import ErrorPage from './component/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/footer",
        element: <Footer></Footer>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>
      }
    ] 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
