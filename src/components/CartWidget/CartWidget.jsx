import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    
    const {totalQuantity} = useContext (CartContext)
    
    
    return(
        <Link to= '/cart'>
            <i className="bi bi-cart text-white" ></i>     
        </Link>
    )
}

export default CartWidget