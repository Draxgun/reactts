import {NavLink, Outlet, createBrowserRouter } from "react-router-dom"
import { Home } from "../Pages/Home";
import {Error} from '../Pages/Error';
import { Login } from '../Pages/Login';
import { Contact } from '../Pages/Contact';
import '../App.css';

const NavbarWrapper = () => {
    return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    )
};

export const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper/>,
      errorElement: <Error />,
      children: [
          {
            path: "/",
            element: <Home/>,
            errorElement: <Error />,
          },
          {
            path: "/login",
            element: <Login/>,
            errorElement: <Error />,
          },
          {
            path: "/contact",
            element: <Contact/>,
            errorElement: <Error />,
          }

      ]
    },

  ])

export const Navbar = () => {
   return ( 
   <div>
        <NavLink className = "navBarElement" to = "/">Home</NavLink>
        <NavLink className = "navBarElement" to = "/login">Login</NavLink>
        <NavLink className = "navBarElement" to = "/contact">Contact</NavLink>
    </div>
    );
}

