import styles from "../../../styles/child.module.css"
import PropTypes from "prop-types"

export default function ListChild(props) {
    const {currentItem, list, handleCurrentItemChange} = props

    return (
        <ul id={styles.list}>
            {list.map((item, index) => (
                <li 
                key={index}
                onClick={() => handleCurrentItemChange(index)}
                className={currentItem === index ? `${styles.li} ${styles.liActive}` : `${styles.li}`}>
                    <div>
                        <p className={styles.liHeading}>{item.title}</p>
                        <p className={styles.liDescription}>{item.description}</p>
                    </div>
                    <div className={styles.liLogo}>
                        <img src={item.logo} alt="Error" />
                    </div>
                </li>
            ))}
        </ul>
    )
}

ListChild.propTypes = {
    currentItem: PropTypes.number,
    list: PropTypes.array,
    handleCurrentItemChange: PropTypes.func
}