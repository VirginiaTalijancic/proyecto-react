import { useState, useContext} from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({name, category, price, img, description,stock }) =>{

    const [quantity, setQuantity] = useState(0)
    const { addItem} = useContext(CartContext)


    
    const handleOnAdd =(count) => {
        const objproductsToAdd = {
            id, name, price, count
        }
    
        console.log(objproductsToAdd)
        
    
        setQuantity(count)

        setCart(prev => [...prev, objproductsToAdd])

        addItem(objproductsToAdd)
    }

    
    
    return(
        <article className="container">
            <div className="card">
            <div className="row">
            <div className="col-12">
            <h4 className="card-title text-center bg-black text-light ">Categoria :{category}  <i className="bi bi-apple text-light"></i> </h4>
            <img className="" src={img} style={{width:300}} />
            <h3 className="text-center bg-black text-light">{name}</h3>
            <h4 className="text-center">{price} </h4>
            <h5 className="card-text text-center bg-black text-light"> {description} </h5>

            
           {quantity === 0? (
            <ItemCount onAdd={handleOnAdd} stock={stock} />
           ) : (
                <Link to= '/cart'> finalizar compra</Link>
           )
           
        
            }
           
            </div>
            </div>
            </div>
    

        </article>
    )
}

export default ItemDetail