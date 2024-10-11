import styles from "../../styles/cards.module.css"
import contact from "../../assets/contact.svg"
import contract from "../../assets/contract.svg"
import design from "../../assets/design.svg"
import discover from "../../assets/discover.svg"
import fast from "../../assets/fast.svg"
import develop from "../../assets/develop.svg"

const list = [
    {
        "logo": contact,
        "title": "Initial Contact",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "logo": discover,
        "title": "Discovery Session",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "logo": contract,
        "title": "Smart Contracting",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "logo": fast,
        "title": "Fast Prototyping",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "logo": design,
        "title": "Design Phase",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        "logo": develop,
        "title": "Develop & Deploy",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]

export default function CardGrid() {
    return (
        <section className="container" id={styles.gridContainer}>
            <ul className="max-width" id={styles.cardGrid}>
                {list.map((item, index) => (
                    <li 
                    key={index}
                    className={styles.card}>
                        <div className={styles.cardLogo}>
                            <img src={list[index].logo} alt="Error" />
                        </div>
                        <p className={styles.cardTitle}>{list[index].title}</p>
                        <p className={styles.cardDesc}>{list[index].desc}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
