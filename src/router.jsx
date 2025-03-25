import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"",
                element:<Home/>
            },
            {
                path: "register",
                element: <Login/>
            },
            {
                path: "login",
                element: <Register/>
            },
            {
                path: "wishlist",
                element: <Wishlist/>
            }
        ]
    }
])

export default myRouter