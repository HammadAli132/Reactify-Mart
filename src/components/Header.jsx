import styles from "../styles/header.module.css"
import loginLogo from "../assets/arrow-right.svg"
import signupLogo from "../assets/user-plus-solid.svg"
import githubLogo from "../assets/github.svg"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <span id={styles.siteTitle}> <Link to="/">Reactify Mart</Link> </span>
            <ul id={styles.navMenu}>
                <li className={styles.li}> <Link to="/">Home</Link> </li>
                <li className={styles.li}> <Link to="products">Products</Link> </li>
                <li className={styles.li}> <Link to="about">About Us</Link> </li>
            </ul>
            <div id={styles.extras}>
                <Link id={styles.loginBtn} to="login">
                    <img src={loginLogo} alt="Error" />
                    <span>Login</span>
                </Link>
                <Link id={styles.signupBtn} to="signup">
                    <img src={signupLogo} alt="Error" />
                    <span>Sign Up</span>
                </Link>
                <div id={styles.githubLink}>
                    <a href="https://github.com/HammadAli132" target="_blank">
                        <img src={githubLogo} alt="Error" />
                    </a>
                </div>
            </div>
        </header>
    )
}