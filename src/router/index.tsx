import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "../pages/home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/home",
        element: <Home />
    },
]);

export default router