import {useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asynMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(()=>{
        setLoading(true)
        const asycnFuction = categoryId ? getProductsByCategory : getProducts
        
        asycnFuction(categoryId)
        .then(result =>{
            setProducts(result)
        })
        .finally ( () =>{
            setLoading(false)
        })
    }, [categoryId])
    
    if(loading) {
        return <h2 className="text-center">CARGANDO LISTADO DE PRODUCTOS..</h2>
    }
    
    return(
        <main className="p-2 container">
            <div className="">
            <h1>{greeting}</h1>
            <ItemList products={products} />
            </div>
        
        </main>
    )
}


export default ItemListContainer