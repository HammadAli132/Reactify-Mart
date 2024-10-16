import styles from "../../styles/callToAction.module.css"

export default function CallToAction() {
    return (
        <section className="container" id={styles.section}>
            <div className="max-width">
                <div id={styles.cta}>
                    <p>Powering your business</p>
                    <p id={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>
                    <div id={styles.ctaInput}>
                        <input type="email" name="email" id={styles.input} placeholder="Your email..."/>
                        <button id={styles.purpleBG}>Subscribe</button>
                    </div>
                    <div id={styles.bigCircle}></div>
                </div>
            </div>
        </section>
    )
}
