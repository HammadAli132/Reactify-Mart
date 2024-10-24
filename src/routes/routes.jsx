import App from "../App.jsx"
import Products from "../components/Products.jsx"
import Cart from "../components/Cart.jsx"
import Login from "../components/Login.jsx"
import SignUp from "../components/SignUp.jsx"
import LandingPage from "../components/LandingPage.jsx"
import ProductDetail from "../components/ProductDetail.jsx"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/:id",
                element: <ProductDetail />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
        ],
    },
]

export default routes