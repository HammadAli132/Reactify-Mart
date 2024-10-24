import { useContext } from "react"
import styles from "../styles/cart.module.css"
import { productAndCartContext } from "../App"

export default function Cart() {
    const {products} = useContext(productAndCartContext)

    if (products.length === 0)
        return (
            <p id={styles.error}>There is no item in the cart</p>
        )
    return (
        <section className="container">
            <div className="max-width">
                <ul id={styles.cartItems}>
                    {products.map((product, index) => {
                        return (
                            <li className={styles.item} key={index}>
                                <img src={product.images[0]} alt="Error" />
                                <p className={styles.productName}>{product.title}</p>
                                <span className={styles.productPrice}>{product.price}$</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
