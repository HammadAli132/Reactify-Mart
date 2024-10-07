import "../styles/header.css"
import loginLogo from "../assets/arrow-right.svg"
import signupLogo from "../assets/user-plus-solid.svg"
import githubLogo from "../assets/github.svg"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <span id="site-title"> <Link to="/">Reactify Mart</Link> </span>
            <ul id="nav-menu">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="products">Products</Link> </li>
                <li> <Link to="about">About Us</Link> </li>
            </ul>
            <div id="extras">
                <Link id="login-btn" to="login">
                    <img src={loginLogo} alt="Error" />
                    <span>Login</span>
                </Link>
                <Link id="signup-btn" to="signup">
                    <img src={signupLogo} alt="Error" />
                    <span>Sign Up</span>
                </Link>
                <div id="github-link">
                    <a href="https://github.com/HammadAli132" target="_blank">
                        <img src={githubLogo} alt="Error" />
                    </a>
                </div>
            </div>
        </header>
    )
}