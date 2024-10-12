import styles from "../../styles/testimonial.module.css"
import airbnb from "../../assets/airbnb.svg"
import amazon from "../../assets/amazon.svg"
import facebook from "../../assets/facebook.svg"
import google from "../../assets/google.svg"

const list = [airbnb, amazon, facebook, google]

export default function Testimonial() {
    return (
        <section className="container" id={styles.container}>
            <div className="max-width" id={styles.testimonialDiv}>
                <div className="verticalBar"></div>
                <p>Trusted by over 20,000 companies all over the world</p>
                <p className={styles.desc}>Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis.</p>
                <ul id={styles.list}>
                    {list.map((item, index) => (
                        <li key={index} className={styles.companyLogos}><img src={list[index]} alt="Error" /></li>
                    ))}
                </ul>
                <div id={styles.testimonial}>
                    <p id={styles.quote} className={styles.desc}>" I love this product and would recommend it to anyone. Could be not easier to use, and our multiple Branch are doing wonderful. We get nice comments all the time. "</p>
                    <p id={styles.author}>Darya Finger</p>
                    <p id={styles.ceo}>CEO & Co-Founder <a href="#">@Ashon</a> </p>
                    <div id={styles.profilePicture}></div>
                </div>
            </div>
        </section>
    )
}
