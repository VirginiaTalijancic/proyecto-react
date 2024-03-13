import { Link } from "react-router-dom"

const Item = ({id, name, category, price, img}) =>{
    return(
        <article className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
            <div className="car-body">
            
                <h4 className="card-text">categoria: {category}</h4>
                <h3>{name}</h3>
                <img className="card-img-top img-fluid" src={img}  />
                <h4 className="card-text"> {price} </h4>
                <Link to={`/item/${id}`}> Ver detalle</Link>
            
            </div>
            </div>
        </article>
    )
}

export default Item