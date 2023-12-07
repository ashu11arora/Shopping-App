/*import {FcDeleteDatabase} from "react-icons/fc"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {
const dispatch =useDispatch();

 const  removeFromCart=()=>{
      dispatch(remove(item.id));
      toast.success("Item Removed");
 }

  return (



  <div>

        <div>


          <div>
            <img src={item.image}></img>
          </div>

            <div>
              <h1>{item.title}</h1>
              <h1>{item.description}</h1>

              <div>
               <p>{item.price}</p>
                  <div onClick={removeFromCart}>
                  <FcDeleteDatabase/>
                  </div>

              </div>
            </div>

           



        </div>








  </div>
  
  
  
  
  
  
  );



};

export default CartItem;
*/
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col  ">

      <div className="flex  gap-3 mt-11   ">

        <div className="h-[180px]"> 
          <img className="h-full w-full "  src={item.image} />
        </div>

        


        <div className="flex-col">
          <h1 className="">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description}</h1>
          <div className="flex">
            <p className="text-green-600 font-semibold">{item.price}</p>
            <div
             onClick={removeFromCart} className="cursor-pointer text-5xl text-red-500 hover:text-red-700 ">
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
