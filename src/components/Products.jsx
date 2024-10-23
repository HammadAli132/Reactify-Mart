import { useEffect } from "react";
import { useState } from "react";
import loadingGif from "../assets/loading.gif"
import styles from "../styles/loading.module.css"

function useProducts() {
    const [isloading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(new Request("https://api.escuelajs.co/api/v1/products?offset=0&limit=48", {mode: "cors"}))
                if (response.ok) {
                    const data = await response.json()
                    console.log(data)
                    setResult(data)
                } else {
                    setIsError(true)
                }
            } catch (error) {
                console.log(error)
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return {isloading, isError, result}
}

function getExerpt(str) {
    if (str.length > 20)
        return str.substring(0, 150) + "..."
    return str
}

export default function Products() {
    const {isloading, isError, result} = useProducts()

    if (isloading)
        return (
            <img src={loadingGif} id={styles.loadingGif} alt="Loading..." />
        )
    else if (isError)
        return (
            <p id={styles.error}>Oops! An error occured. Please try again...</p>
        )
    return (
        <section className="container">
            <div className="max-width">
                <ul id={styles.productGrid}>
                    {result.map((prod, index) => {
                        return(
                            <li key={index}
                                className={styles.productCard}
                            >
                                <img src={prod.images[0]} alt="Error" />   
                                <p className={styles.productTitle}>{prod.title}</p>
                                <p className={styles.productDesc}>{getExerpt(prod.description)}</p>
                                <div className={styles.row}>
                                    <span className={styles.productPrice}>{prod.price}$</span>
                                    <button className={styles.productExp}>Explore Item</button>
                                </div>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        </section>
    )
}
