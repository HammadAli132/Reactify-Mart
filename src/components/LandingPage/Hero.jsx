import { Link } from "react-router-dom"
import styles from "../../styles/hero.module.css"

export default function Hero() {
    return (
        <section className="container" id={styles.heroSection}>
            <div className="max-width" id={styles.container}>
                <h1 id={styles.heroTitle}>Make your Outfit <span id={styles.coloredHeroTitle}>wonderful</span></h1>
                <p className={styles.heroText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores animi fuga harum atque facere eveniet, sequi provident ducimus, ratione sit nisi officia amet, dignissimos.</p>
                <div className={styles.buttonBox}>
                    <Link id={styles.purpleBG} to="products">
                        Start Shopping
                    </Link>    
                    <Link id={styles.darkBG} to="about">
                        Learn More
                    </Link>
                </div>
                <div className={styles.bigCircle}></div>
                <div className={styles.smallCircle}></div>
            </div>
        </section>
    )
}
