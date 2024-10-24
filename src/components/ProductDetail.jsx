import { useContext, useEffect } from "react";
import { useState } from "react";
import loadingGif from "../assets/loading.gif"
import styles from "../styles/productDetails.module.css"
import { useParams } from "react-router-dom";
import { productAndCartContext } from "../App";

function useProducts() {
    const [isloading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [result, setResult] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(new Request(`https://api.escuelajs.co/api/v1/products/${id}`, {mode: "cors"}))
                if (response.ok) {
                    const data = await response.json()
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
    })

    return {isloading, isError, result}
}

export default function Products() {
    const {isloading, isError, result} = useProducts()
    const {products, addToCart} = useContext(productAndCartContext)

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
                <div id={styles.mainDiv}>
                    <div id={styles.images}>
                        <img src={result.images[0]} alt="Error" />   
                    </div>
                    <div id={styles.details}>
                        <p className={styles.productTitle}>{result.title}</p>
                        <p className={styles.category}>Category: {result.category.name}</p>
                        <p className={styles.productDesc}>{result.description}</p>
                        <div className={styles.row}>
                            <span className={styles.productPrice}>{result.price}$</span>
                            <button onClick={() => addToCart([...products, result])}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}