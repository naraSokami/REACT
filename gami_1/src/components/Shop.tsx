import { FC } from "react";
import Product from "./Product";
import "./Shop.css"

interface ShopProps {
    products: []
}

const Shop : FC<ShopProps> = ({products}) => {
    return ( 
        <div className="shop">
            <div className="products">
                {
                    products.map((product, i) => (
                        <Product key={i} product={product}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Shop;