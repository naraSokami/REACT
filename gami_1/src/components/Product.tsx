import { FC, useState } from "react";

interface IProduct {
    title: string
    image: string
    description: string
    price: number
    rating: {
        rate: number
    }
}

interface ProductProps {
    product: IProduct
}
 
const Product: FC<ProductProps> = ({ product }) => {
    
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const onHeartClick = () => {
        setIsHeartFilled((prev : Boolean) => !prev)
    }

    return (  
        <div className="product">
            <div className="img">
                <div className="rating">
                    <p>{product.rating.rate} <i className="fa-solid fa-star"></i></p>
                </div>
                <div className="heart">
                    <i style={{ display: isHeartFilled ? "none" : "flex" }} onClick={onHeartClick} className="fa-regular fa-heart empty"></i>
                    <i style={{ display: isHeartFilled ? "flex" : "none" }} onClick={onHeartClick} className="fa-solid fa-heart filled"></i>
                </div>
                <img src={product.image} alt="" ></img>
                <div className="infos">
                    <h3 className="title">{product.title}</h3>
                    <div className="price-buy">
                        <p className="price">{product.price}<span>$</span></p>
                        <button className="buy">
                            BUY
                            <div className="buy-transi"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Product;