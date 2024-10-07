import App from "./App.jsx"
import Products from "./components/Products.jsx"
import About from "./components/About.jsx"
import Login from "./components/Login.jsx"
import SignUp from "./components/SignUp.jsx"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "products",
                element: <Products />
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