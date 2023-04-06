import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "../pages/home";
import Search from "../pages/search";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/search",
                element: <Search />
            },
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
        name: "查询车辆信息"
    }
]

export { router, navRoute } 