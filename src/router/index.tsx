import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "../pages/home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/search",
                element: <Home />
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
        name: "查询"
    }
]

export { router, navRoute } 