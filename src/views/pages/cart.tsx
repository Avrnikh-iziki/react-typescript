import "./style.css"
import { FC } from 'react'
import CartComponent from "../../component/cart";
const Cart:FC = () => {
  return (
    <div className="container su">
      <CartComponent />
    </div>
  );
}

export default Cart;