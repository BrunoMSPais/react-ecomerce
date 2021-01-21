import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';
// import productImage from 'https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>
                    {title}
                </p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt={title}/>

            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
