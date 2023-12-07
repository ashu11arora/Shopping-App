
/*//import ReactDOM from "react-dom/client";
import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"



const Navbar = () => {
  return (

 <div className="bg-blue-500">

    <div className="flex justify-between ">

    <NavLink to ="/">
   <div>
  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcode%2Blogo&psig=AOvVaw07YD2nlYHRiC6rglFGE4cv&ust=1696682235686000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj9yoK44YEDFQAAAAAdAAAAABAE" alt=""></img>
 </div>
</NavLink>

<div >

   <NavLink to="/">
     <p>Home</p>
   </NavLink>


    <NavLink to="/cart">
      <div>
      <FaShoppingCart/>
      </div>
    </NavLink>
     
</div>



</div>



    </div>

   
  )
};

export default Navbar;
*/
import ReactDOM from "react-dom/client";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png" className="h-14"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/">
              <p>Categories</p>
            </NavLink>


            <NavLink to="/">
              <p>Notification</p>
            </NavLink>


            <NavLink to="/">
              <p>Account</p>
            </NavLink>

            <NavLink to="/">
              <p>My Orders</p>
            </NavLink>

            <NavLink to="/">
              <p>Wishlist</p>
            </NavLink>
              


            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
