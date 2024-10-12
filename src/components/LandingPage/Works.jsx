import styles from "../../styles/works.module.css"

export default function Works() {
    return (
        <section className="container" id={styles.container}>
            <div className="max-width" id={styles.containerDiv}>
                <p>How Simple works</p>
                <p id={styles.description}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
            </div>
        </section>
    )
}
