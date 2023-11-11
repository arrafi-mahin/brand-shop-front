
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../pages/AddProduct/AddProduct";
import AddCategory from "../pages/AddCategory/AddCategory";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () =>await fetch(`${import.meta.env.VITE_BASE_URL}/category`)
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/category/:id",
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BASE_URL}/category/${params.id}`)
            },
            {
                path: "/addCategory",
                element: <PrivateRoute><AddCategory></AddCategory></PrivateRoute>,
            },
            {
                path: "/product/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BASE_URL}/product/${params.id}`)
            },
            {
                path: "updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BASE_URL}/product/${params.id}`)
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            }
        ]
    }
])

export default router;