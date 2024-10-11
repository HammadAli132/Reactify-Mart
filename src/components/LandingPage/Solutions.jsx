import styles from "../../styles/solutions.module.css"
import Container from "./SolutionsSubComponents/ParentContainer"

export default function Solutions() {
    return (
        <section className="container">
            <div className="max-width" id={styles.container}>
                <div className="verticalBar"></div>
                <p id={styles.title}>Explore the solutions</p>
                <p id={styles.description}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                <p className={styles.leftAlignedTitle}>Powerful suite of tools</p>
                <p className={`${styles.leftAlignedTitle} ${styles.leftAlignedDescription}`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                <Container />
            </div>
        </section>
    )
}
