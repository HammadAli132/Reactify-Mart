import App from "../App.jsx"
import Products from "../components/Products.jsx"
import About from "../components/About.jsx"
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
                path: "about",
                element: <About />
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