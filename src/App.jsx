import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Main from './components/Main.jsx'; 
import Notifications from './components/Notifications.jsx'; 
import Developers from './components/Developers.jsx'; 
import Profile from './components/Profile.jsx'; 


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      children:[
        {path:'/', element:<Main/>},
        {path:'/notifications', element:<Notifications/>},
        {path:'/developers', element:<Developers/>},
        {path:'/profile', element:<Profile/>}
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ])

  return (
      <div className='min-h-screen bg-myBlack text-white px-5'>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App