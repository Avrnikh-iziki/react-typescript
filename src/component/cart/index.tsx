import "./style.css"
import { FC } from "react"
import { useSelector } from "react-redux";
import { Product } from "../../utiles/types"
import { useDispatch } from "react-redux";
import { addQ, dellQ } from "../../store/product";


const CartComponent: FC = () => {
    const [, ...product] = useSelector((state: { Product: Product[] }) => state.Product)
    const dispatch = useDispatch()
    const add = (id: string) => {
        dispatch(addQ({ id }))
    }
    const total = () => {
        return product.reduce((a: number, b: Product): number => {
            return a + Number(b.price) * Number(b.Q)
        }, 0)
    }

    const del = (id: string) => {
        dispatch(dellQ({ id }))
    }
    return (
        <div className="c-addcart">
            <h5 className="cart-title">your cart</h5>
            {product.map((el: Product, index: number) => {
                return (
                    <div key={index} className="cart-container">
                        <div className="cart-image" style={{ backgroundImage: `url(${el.image})` }} />
                        <div className="cart-name">{el.name}</div>
                        <div className="cart-price">{el.price}$</div>
                        <div className="cart-price">{el.Q}</div>
                        <div className="cart-nproduct ">
                            <div className="add cart-button" onClick={() => add(el.id)}>+</div>
                            <div className="del cart-button" onClick={() => del(el.id)}>-</div>
                        </div>
                    </div>

                )
            })}
            <div className="cart-total">{total().toFixed(2)} $</div>
        </div>
    );
}

export default CartComponent;