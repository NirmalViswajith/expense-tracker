
import React, { Fragment, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../../Cart/Cart'
import cartContext from '../../Conrext-store/CartContext'
import './NavBar.css'


const NavBar = () => {

    const ctx=useContext(cartContext);

   

    const logoutHandler=()=>{
        ctx.logout();
    }

    let NoItem;
    NoItem=ctx.items.reduce((curr,item)=>curr+item.quantity
    ,0);

    
    

  return (
   <Fragment>
    <div className='nav-main-div'>
        <div className='nav-sub-div'>
        <NavLink className='nav-sub-com' to='/'>Home</NavLink>
        <NavLink className='nav-sub-com' to='/store'>Store</NavLink>
        <NavLink className='nav-sub-com' to='/about'>About</NavLink>
        <NavLink className='nav-sub-com' to='/contact'>Contact</NavLink>
        {!ctx.isLoggedIn && <NavLink className='nav-sub-com' to='/login'>
            <button type="button" className="btn btn-primary login-btn">Login</button>
        </NavLink>}
        {ctx.isLoggedIn && <NavLink className='nav-sub-com' to='/login'>
            <button type="button" className="btn btn-primary login-btn" onClick={logoutHandler}>Logout</button>
        </NavLink>}
        
           {ctx.isLoggedIn &&  <Cart />}
            
        <p className='cart-item-no'>
            {NoItem}
        </p>
        </div>
    </div>
   </Fragment>
  )
}

export default NavBar;