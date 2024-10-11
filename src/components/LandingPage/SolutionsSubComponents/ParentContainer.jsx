import { useState } from "react"
import bolt from "../../../assets/bolt.svg"
import star from "../../../assets/star.svg"
import plane from "../../../assets/plane.svg"
import illustration1 from "../../../assets/illustration-1.svg"
import illustration2 from "../../../assets/illustration-2.svg"
import illustration3 from "../../../assets/illustration-3.svg"
import ListChild from "./ListChild"
import ImageChild from "./ImageChild"
import styles from "../../../styles/parentContainer.module.css"

const listOfItems = [
    {
        "title": "Simple shoping ecosystem",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sit culpa distinctio.",
        "logo": bolt
    },
    {
        "title": "Simple shoping ecosystem",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sit culpa distinctio.",
        "logo": star
    },
    {
        "title": "Simple shoping ecosystem",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sit culpa distinctio.",
        "logo": plane
    },
]

const listOfIllustrations = [illustration1, illustration2, illustration3]

export default function SolutionsList() {
    const [currentItem, setCurrentItem] = useState(0)

    const handleCurrentItemChange = (index) => {
        setCurrentItem(index)
    }

    return (
        <div id={styles.parentContainer}>
            <ListChild currentItem={currentItem} list={listOfItems} handleCurrentItemChange={handleCurrentItemChange} />
            <ImageChild currentItem={currentItem} listOfIllustrations={listOfIllustrations} />
        </div>
    )
}
