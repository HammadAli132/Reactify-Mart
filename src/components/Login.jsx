import { Link } from "react-router-dom"
import styles from "../styles/login.module.css"

export default function Login() {
    return (
        <section className="container" id={styles.section}>
            <div className="max-width" id={styles.formDiv}>
                <p id={styles.formTitle}>Login</p>
                <form action="#" id={styles.form}>
                    <label htmlFor="email" className={styles.label}>Email Address
                        <input type="email" name="email" id={styles.email} />
                    </label>
                    <label htmlFor="password" className={styles.label}>Password
                        <input type="password" name="password" id={styles.password} />
                    </label>
                    <button type="submit" className={styles.button} id={styles.loginBtn}>Login</button>
                    <Link to="/signup" className={styles.button} id={styles.signinBtn}>Sign Up</Link>
                </form>
            </div>
        </section>
    )
}
