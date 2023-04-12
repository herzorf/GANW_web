import { createHashRouter } from "react-router-dom";
import { LazyExoticComponent, Suspense, lazy } from "react";

const App = lazy(() => import('../app'));
const Home = lazy(() => import('../pages/home'));
const Search = lazy(() => import('../pages/search'));
const ProductInfo = lazy(() => import('../pages/productInfo'));
const ErrorPage = lazy(() => import('../pages/errorPage'));
const WithLoadingComponent = (Element: JSX.Element) => {
    return <Suspense fallback={"加载中。。。"}>
        {Element}
    </Suspense>
}
const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: WithLoadingComponent(<Home />)
            },
            {
                path: "/search",
                element: WithLoadingComponent(<Search />)
            },
            {
                path: "/productInfo/:proId",
                element: WithLoadingComponent(<ProductInfo />)
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