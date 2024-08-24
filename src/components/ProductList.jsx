import { Product } from "./Product"

export const ProductList = ({items, onMove}) => {
    return <div className="col-md-7">

        <p>Product List</p>
        <div className="row">
            {
                items.map(elm => <Product key={elm.id} onMove = {onMove} {...elm} /> )
            }
        </div>
        
    
    
    </div>
    
}

/*
items.map(elm => <div key={elm.id} className="col-md-4">
                    <img
                        src={elm.photo}
                        style={{width:200, height:200, objectFit:'cover'}}
                    />
                    <p>{elm.price} USD</p>
                    <button className="btn btn-outline-dark">move</button>
                </div>)
                */