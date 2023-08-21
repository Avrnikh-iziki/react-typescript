import "./style.css"
import ProductComponent from "../../component/product";
import { FC } from 'react'
const Product:FC = () => {
  return (
    <div className="container su">
      <ProductComponent />
    </div>
  );
}

export default Product;