import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createContext, useState } from "react"

export const productAndCartContext = createContext({
  products: [],
  count: 0,
  addToCart: () => {}
})

export default function App () {

  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  const addToCart = (prod) => {
    setProducts(prod)
    setCount(count + 1)
    console.log(prod)
  }

  return (
    <productAndCartContext.Provider value={{products, count, addToCart}}>
      <Header />
      <main>{<Outlet />}</main>
      <Footer />
    </productAndCartContext.Provider>
  )
}