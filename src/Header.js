import React from 'react'
import "./Header.css"


function Header() {
    return (
        <div className='header'>
           <img className='img' src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007.png" width="150px" height="60px"/>

           <div>
               <input className='input' placeholder='Search for products, brands and more' type="text" />
               <button className='login'>Login</button>

           </div>
        </div>
    )
}

export default Header;
