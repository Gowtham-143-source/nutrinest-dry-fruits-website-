import { StrictMode } from 'react' ;
import { createRoot } from 'react-dom/client' ;
import './index.css' ;
import App from './App.jsx' ;
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home.jsx';
import Shop from './Shop/Shop.jsx';
import SingleProduct from './Shop/SingleProduct.jsx';
import CartPage from './Shop/CartPage.jsx';
import About from './about/About.jsx';
import Contact from './contactpage/Contact.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Login from './components/Login.jsx';
import Signup from "./components/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/", element: <Home/>},
      // {
      //   path: "/blog",
      //   element: <Blog/>
      // },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "shop/:id",
        element: <SingleProduct/>
      },
      {
        path: "/cart-page",
        element: <PrivateRoute><CartPage/></PrivateRoute>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      

    ],
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "sign-up",
    element: <Signup/>
  }
]); 

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
)
