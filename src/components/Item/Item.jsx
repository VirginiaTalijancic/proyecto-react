import { Link } from "react-router-dom"

const Item = ({id, name, category, price, img}) =>{
    return(
        <article className="container">
            <div className="card text-center">
            <div className="car-body">
            <div className="row">
            <div className=" col-md-6">
                <h4 className="card-text">categoria: {category}</h4>
                <h3>{name}</h3>
                <img className="" src={img} style={{width:200}} />
                <h4 className="card-text">$ {price} </h4>
                <Link to={`/item/${id}`}> ver detalle</Link>
            </div>
            </div>
            </div>
            </div>
        </article>
    )
}

export default Item