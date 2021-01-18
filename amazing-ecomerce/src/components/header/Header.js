import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from 'react';
import './Header.css';
import Logo from '../../assets/images/amazing.png';

function Header() {
    return (
        <div className='header'>
            <img
                className="header_logo" 
                src={Logo} 
                alt="amazon-logo"
            />
            <div className="header_search">
                <input
                    type="text"
                    className="header_searchInput"
                />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header_optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>

                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
