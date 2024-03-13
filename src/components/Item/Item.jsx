import { Link } from "react-router-dom"

const Item = ({id, name, category, price, img}) =>{
    return(
       
        <article className="col-md-3">
            <div className="card p-1 overflow-hidden h-100 shadow">
            <div className="car-body text-center">
            
                <h4 className="card-text text-center bg-black text-light "> {category} <i className="bi bi-apple text-light"></i> </h4>
                <h3 className="">{name} </h3>
                <img className="p-3" src={img} style={{ height: '200px', objectFit: 'cover' }} />
                <h4 className="text-center bg-black text-light"> {price} </h4>
                
                <Link to={`/item/${id}`} className="text-black text-center p-1"> Ver detalle</Link>
            
            </div>
            </div>
        </article>
    )
}

export default Item