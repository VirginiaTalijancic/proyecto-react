import {useState, useEffect } from "react"
import { getProductsById} from "../../asynMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer= () =>{

    const [products, setProducts] = useState(null)

    const { itemId } = useParams()

    useEffect ( () =>{
        getProductsById(itemId)
        .then(result =>{
            setProducts(result)
        })
    }, [itemId])

    return(
       <div className="container p-2 text-center ">
        
            <h1 className="bg-black text-white">Detalle del producto</h1>
            <ItemDetail {...products} />
         </div>
    )
}

export default ItemDetailContainer