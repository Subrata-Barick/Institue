import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './home/Home.jsx';
import About from './about/About.jsx';
import Courses from './courses/Courses.jsx';
import Trainer from './trainer/Trainer.jsx';
import Events from './events/Events.jsx';
import Pricing from './pricing/Pricing.jsx';
import Contact from './contact/Contact.jsx';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
const router=createBrowserRouter([
  {path:'/',
  element:<App/>,
  children:[
    {path:'/',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/courses',element:<Courses/>},
    {path:'/trainer',element:<Trainer/>},
    {path:'/events',element:<Events/>},
    {path:'/pricing',element:<Pricing/>},
    {path:'/contact',element:<Contact/>},
    

  ]
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
