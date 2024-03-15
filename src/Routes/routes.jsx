import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import Details from "../pages/Details/Details";

export const route = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/checkout',
            element: <Checkout></Checkout>,
            loader: () => fetch('data.json')
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: () => fetch('data.json')
        }
    ]
}])