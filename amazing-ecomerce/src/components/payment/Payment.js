import './Payment.css'
import axios from '../../axios'
import { Link, useHistory } from 'react-router-dom'
import { getBasketTotal } from '../../reducer'
import React, { useState, useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../checkout/checkoutProduct/CheckoutProduct'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'

function Payment() {
    const[{ basket, user }, dispatch] =useStateValue()
    const history = useHistory();

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // generate the client secret witch allows us to charge a customer
        // every time the basket changes

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('client secret', clientSecret)
 
    const handleSubmit = async (e) => {
        // stripe sumit
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })
    }

    const handleChange = e => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }


    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout (<Link to='/checkout' className='link'>{basket?.length} items</Link>)
                </h1>

                {/* Payment section - delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Adress</h3>
                    </div>

                    <div className="payment_adress">
                        <p>
                            {user?.email}
                        </p>
                        <p>
                            123 Alameda React   {/*ADRESS*/}
                        </p>
                        <p>
                            1700-001 Lisboa     {/*LOCATION / ZIP CODE*/}
                        </p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>
                            Review items and delivery
                        </h3>
                    </div>

                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Payment section - Payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>
                            Payment Method
                        </h3>
                    </div>

                    <div className="payment_details">
                        {/* To Set up with stipe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                Order Total: {value}
                                            </h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />

                                <button
                                    disabled={processing || disabled || succeeded}
                                >
                                    <span>
                                        {processing ? 
                                            <p>Processing</p> : 'Buy Now'}
                                    </span>
                                </button>
                            </div>

                            {/* Errors displaying */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
