import React from 'react';
import './Header.scss';

export const Header = () => {
    return (
        <div>
            <header>
                <div className="top-notice">
                    <span>Use our store locator to find products's at a shop near you.</span>
                </div>
                <div className="main-nav">
                    <div className="long-nav">
                        <ul>
                            <li>BrandName</li>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Health Needs</li>
                            <li>Ingredients</li>
                            <li>Our Difference</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div className="short-nav">
                        <ul>
                            <li>My Account</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}
