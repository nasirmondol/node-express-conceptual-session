import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users.jsx';
import DisplayUsers from './components/DisplayUsers.jsx';
import UpdateUser from './components/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users></Users>
  },
  {
    path: '/displayusers',
    element: <DisplayUsers></DisplayUsers>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/update/:id',
    element: <UpdateUser></UpdateUser>,
   loader: ({params}) =>{
    console.log(params)
    return fetch(`http://localhost:5000/users/${params.id}`)
   }
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
