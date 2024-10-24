import styles from "../styles/header.module.css"
import loginLogo from "../assets/arrow-right.svg"
import signupLogo from "../assets/user-plus-solid.svg"
import githubLogo from "../assets/github.svg"
import { Link } from "react-router-dom"
import { productAndCartContext } from "../App"
import { useContext } from "react"

export default function Header() {
    const {count} = useContext(productAndCartContext)

    return (
        <header>
            <span id={styles.siteTitle}> <Link to="/">Reactify Mart</Link> </span>
            <ul id={styles.navMenu}>
                <li className={styles.li}> <Link to="/">Home</Link> </li>
                <li className={styles.li}> <Link to="/products">Products</Link> </li>
                <li className={styles.li}>
                    <Link to="/cart">Cart<sup id={styles.cartCount}>{count}</sup> </Link>
                </li>
            </ul>
            <div id={styles.extras}>
                <Link id={styles.loginBtn} to="/login">
                    <img src={loginLogo} alt="Error" />
                    <span>Login</span>
                </Link>
                <Link id={styles.signupBtn} to="/signup">
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