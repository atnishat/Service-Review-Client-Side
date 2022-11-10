import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";

import AllService from "../../pages/All-service/AllService";
import Blog from "../../pages/Blog/Blog";
import Checkouts from "../../pages/Checkouts/Checkouts";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/Orders/Orders";
import Pagenotfound from "../../pages/PageNoFound/Pagenotfound";
import SignUp from "../../pages/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
              element:<PrivateRoute><Checkouts></Checkouts></PrivateRoute>,
             loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
              path:'/orders',
              element:<Orders></Orders>
            },
            {
              path:'blog',
              element:<Blog></Blog>
            }
        ]
    },

    {

      path:'/services',
      element:<AllService></AllService>
      
    },
    {
      path:'*',
      element:<Pagenotfound></Pagenotfound>
  }
  ])
export default router;