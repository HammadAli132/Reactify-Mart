import { useEffect, useRef } from "react"
import styles from "../../../styles/child.module.css"
import PropTypes from "prop-types"

export default function ImageChild(props) {
    const {currentItem, listOfIllustrations} = props
    const imgRef = useRef(null)

    useEffect(() => {
        const image = imgRef.current
        image.classList.remove(styles.animateImage)
        void image.offsetWidth;
        image.classList.add(styles.animateImage)
    },[currentItem])

    return (
        <div className={styles.imageChild}>
            <img ref={imgRef} src={listOfIllustrations[currentItem]} alt="Error" />
        </div>
    )
}

ImageChild.propTypes = {
    currentItem: PropTypes.number,
    listOfIllustrations: PropTypes.array
}