import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "../app";
import Home from "../pages/home";
import Search from "../pages/search";
import ProductInfo from "../pages/productInfo";
import ErrorPage from "../pages/errorPage";
const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/productInfo/:proId",
                element: <ProductInfo />
            }
        ]
    },


]);

const navRoute = [
    {
        id: 1,
        path: "/",
        name: "首页"
    },
    {
        id: 2,
        path: "/search",
        name: "查询商品信息"
    }
]

export { router, navRoute } 