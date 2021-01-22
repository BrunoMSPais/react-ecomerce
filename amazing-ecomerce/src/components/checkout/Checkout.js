import React from 'react'
import './Checkout.css'
import Subtotal from './subtotal/Subtotal'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from './checkoutProduct/CheckoutProduct'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    // console.log('basket: ', basket)
    
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ckeckout_ad" className="checkout_ad"/>

                <div>
                    <h3>Hello, {user?.email || 'Guest'}</h3>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {basket.map((item, i) => (
                        <div id={i}>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
