import React from 'react'
import style from './UpperFooter.module.css'
function UpperFooter() {
    return (
        // {/* Upper footer */}
        <div className={style['footer-menu-container']}>
            <div className={style["footer-menu"]}>
                <ul className={style['menu-style']}>
                    <h2>Cars</h2>
                    <li>How to Buy</li>
                    <li>Sell Your Car</li>
                    <li>Finance & Insurance</li>
                    <li>Aucitons & Events</li>
                    <li>Buyer & Seller Fees</li>
                    <li>Vehicle Sale Price History Tool</li>
                    <li>Shipping Costs</li>
                </ul>
            </div>
            <div className={style["footer-menu"]}>
                <ul className={style['menu-style']}>
                    <h2>Finance and Insurance</h2>
                    <li>Finance Homepage</li>
                    <li>Car & Personal Finance</li>
                    <li>Loan Calculator</li>
                    <li>Car Insurance</li>
                    <li>Mechanical Breakdown Insurance</li>
                    <li>General Insurance</li>
                    <li>Trucks Finance</li>
                    <li>Financial Information</li>
                </ul>
            </div>
            <div className={style["footer-menu"]}>
                <ul className={style['menu-style']}>
                    <h2>Search for</h2>
                    <li>Cars</li>
                    <li>Trucks & Machinery</li>
                    <li>Damaged & End of Life Cars</li>
                    <li>Boats & Marine</li>
                    <li>Motorcycles & Scooters</li>
                    <li>General Goods</li>
                    <li>Buses, Caravans & Motorhomes</li>
                    <li>Turners Auction Schedule</li>
                </ul>
            </div>
            <div className={style["footer-menu"]}>
                <ul className={style['menu-style']}>
                    <h2>About Us</h2>
                    <li>Overview</li>
                    <li>Turners Careers</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Turners Live</li>
                    <li>The Good Oil Blog</li>
                    <li>Email Alerts</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default UpperFooter