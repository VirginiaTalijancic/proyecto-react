
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, price, img, description,stock }) =>{
    return(
        <article className="container">
            <div className="card">
            <div className="row">
            <div className="col-12">
            <h4 className="card-title">Categoria :{category}</h4>
            <img className="" src={img} style={{width:300}} />
            <h3 className="card-text">{name}</h3>
            <h4>{price} </h4>
            <h5 className="card-text text-center"> {description} </h5>
            <ItemCount stock={10}/>
            </div>
            </div>
            </div>
        </article>
    )
}

export default ItemDetail