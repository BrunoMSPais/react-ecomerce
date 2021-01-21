import React from 'react';
import './Home.css';
import HeroImg from '../../assets/images/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg';
import Product from '../product/Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_bkgrd"
                    src={HeroImg}
                    alt="Hero-bkgrd"
                />
            </div>

            <div className="home_row">
                <Product
                    id='123451'
                    title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                    price={29.99}
                    image='https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg'
                    rating={5}
                    btn
                />
                <Product
                    id='123452'
                    title='Kenwood kMix Stand Mixer for Banking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                    price={239.0}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/61sl-%2BAmBvL._AC_SY450_.jpg'
                    btn
                />
            </div>

            <div className="home_row">
                <Product
                    id='4903440'
                    title="Samsung Galaxy Watch 3 (45mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking , and Long lasting Battery - Mystic Silver (US Version)"
                    price={199.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/81Iu41zFPwL._AC_SX148_SY213_QL70_.jpg'
                    btn
                />
                <Product
                    id='23445930'
                    title="Amazon Echo (3d generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={598.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/61mhy8eQGEL._AC_SX148_SY213_QL70_.jpg'
                    btn
                />
                <Product
                    id='3254354345'
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_SX148_SY213_QL70_.jpg'
                    btn
                />
            </div>

            <div className="home_row">
                <Product
                    id='4903850'
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={1094.98}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71916r38cNL._AC_SX222_SY320_FMwebp_QL65_.jpg'
                    btn
                />
            </div>
        </div>
    )
}

export default Home
