import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogIn from './Pages/LogIn.jsx';
import Home from './Pages/Home.jsx';
import AuthProvider from './AuthContext/AuthProvider.jsx';
import Registration from './Pages/Registration.jsx';
import PrivateRoute from './AuthContext/PrivateRoute.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home> 
      },
      {
        path: "/LogIn",
        element: <LogIn></LogIn> 
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ],    
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children :[
      
    ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
