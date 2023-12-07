/*import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {


  //you have an object and you want to extract specific properties from it, you can use destructuring assignment
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

    //is a reducer function applied to the cart array. It calculates the total amount by adding up the price property of each item in the cart.with default value 0
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])


  return (

      <div>
      {
        cart.length>0?
        (

            <div>


            <div>
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
              })
            }
          </div>




            
            <div>

              <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items:{cart.length}</span>
              </p>
              </div>

              <div>
                <p>Total Amount:${totalAmount}</p>
                <button>
                  CheckOut Now
                </button>
              </div>
              



            </div>










            </div>
          







        ):

        (
            <div>
              <h1>Cart Empty</h1>
              <Link to="/">
                <button>
                  Shop Now
                </button>
              </Link>
            </div>

        )
      }
      </div>


  );
};

export default Cart;
*/
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div >
  {
    cart.length > 0  ? 
    (<div className="flex   justify-around">


      <div >
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>
        
     

      <div className="flex flex-col h-screen justify-center items-center  ">
      <img src="../logo.png" className=" flex justify-center items-center h-14"/>
        <div className="flex-col p-8 rounded shadow-md mb-4">
          <div className="text-2xl font-semibold mb-4">Your Cart</div>
          <div className="mb-2">Summary</div>
          <p className="mb-4">
            <span className="font-bold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className=" bg-white p-8 rounded shadow-md flex-col">
          <p text-lg mb-4>Total Amount: ${totalAmount}</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex h-screen flex-col justify-center items-center gap-6 ">
      <h1 class>Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-400 border px-4 py-4">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
