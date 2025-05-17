import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log("items in cart", items);
  const dispatch = useDispatch();
  const clearItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className='w-6/12 mx-auto'>
      <h1 className='w-fit font-bold text-lg mx-auto pt-2'>Cart Items</h1>
      <button
        className='rounded bg-slate-400 block p-2 w-fit mt-2 mx-auto'
        onClick={clearItems}>
        Clear Cart
      </button>
      <div className='pt-2'>
        {items.length > 0 ? (
          <ItemList items={items} />
        ) : (
          <h1 className='w-fit text-lg mx-auto p-2'>No Items in Cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
