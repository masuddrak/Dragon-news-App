import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NewsCardDetails from "../Pages/Home/NewsCardDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("/news.json")
        },
        {
            path:"/about",
            element:<PrivateRoute><About></About></PrivateRoute>,
        },
        {
          path:"/news/:id",
          element:<PrivateRoute><NewsCardDetails></NewsCardDetails></PrivateRoute>,
          loader:()=>fetch("/news.json")
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
       
      ]
    },
  ]);
  export default router