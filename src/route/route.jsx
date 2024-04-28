import {createBrowserRouter} from "react-router-dom";
  import Root from "../root/root"
import Home from "../components/homes/home";
import About from "../components/homes/about/about";
import Contacts from "../components/homes/contacts/contacts";
import Additem from "../components/homes/additem/additem";

  const route = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/additem',
            element:<Additem></Additem>,
        },

        {
            path:'/about',
            element: <About></About>,
        },
        {
            path:'/contacts',
            element:<Contacts></Contacts>,
        }
      ]
    },
  ]);


export default route;