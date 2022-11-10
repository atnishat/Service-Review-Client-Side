import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";

import AllService from "../../pages/All-service/AllService";
import Checkouts from "../../pages/Checkouts/Checkouts";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/Orders/Orders";
import SignUp from "../../pages/Signup/SignUp";


const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'/login',
              element:<Login></Login>
              
            },
            {
              path:'/signup',
              element:<SignUp></SignUp>
            },
            {
              path:'/checkouts/:id',
              element:<Checkouts></Checkouts>,
             loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
              path:'/orders',
              element:<Orders></Orders>
            }
        ]
    },

    {

      path:'/services',
      element:<AllService></AllService>
      
    }
  ])
export default router;