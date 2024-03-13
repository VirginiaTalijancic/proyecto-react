
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, price, img, description,stock }) =>{
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
            
            <ItemCount stock={10}/>
           
            </div>
            </div>
            </div>
        </article>
    )
}

export default ItemDetail