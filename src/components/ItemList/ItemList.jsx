import Item from "../Item/Item"

const ItemList= ({products}) =>{
    return(
        <section className="row">
          
        
           
        {products.map(products =>{
                    
                   
                    return <Item key={products.id} {...products}/>
                })
            }
            
        </section>
    )
}

export default ItemList