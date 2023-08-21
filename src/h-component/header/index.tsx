import "./style.css"
import { Link, NavLink } from "react-router-dom"
import { logout } from "../../store/slice"
import { useDispatch, useSelector } from "react-redux"
import { FC } from "react"
import { Product } from "../../utiles/types"

export const SubHeader: FC = () => {
    const dispatch = useDispatch()
    const lgout = () => {
        dispatch(logout(null))
    }
    const totalProduct: number = useSelector((state: { Product: Product[] }) => state.Product).length - 1
    return (
        <nav className="c-subHeader">
            <NavLink
                to="."
                end
                className={({ isActive }): string => isActive ? "active" : "notactive"}
            >
                Dashboard
            </NavLink>

            <NavLink
                to="cart"
                className={({ isActive }): string => isActive ? "active" : "notactive"}
            >
                Cart
                {totalProduct > 0 && <span className="cart-items">{totalProduct}</span>}
            </NavLink>
            <NavLink
                to="income"
                className={({ isActive }): string => isActive ? "active" : "notactive"}
            >
                Income
            </NavLink>
            <NavLink
                to="/"
                onClick={lgout}
                className={({ isActive }): string => isActive ? "notactive" : "notactive"}
            >
                logout
            </NavLink>
        </nav>
    )
}
export const IncomeSideBar: FC = () => {
    return (
        <nav className="sideBar">
            <div className="logo-income"># React</div>
            <NavLink
                to="."
                end
                className={({ isActive }): string => isActive ? "active" : "not_active"}
            >
                OverView
            </NavLink>
            <NavLink
                to="myproduct"
                className={({ isActive }): string => isActive ? "active" : "not_active"}
            >
                Product
            </NavLink>
            <NavLink
                to="myorders"
                className={({ isActive }): string => isActive ? "active" : "not_active"}
            >
                Orders
            </NavLink>

        </nav>
    )
}
const Header: FC = () => {
    return (
        <header className="c-header">
            <Link className="logo" to="/">#React</Link>
            <nav className="c-nav">
                <NavLink
                    to="products"
                    className={({ isActive }): string => isActive ? "active" : "not_active"}
                >Product</NavLink>
                <NavLink
                    to="login"
                    replace
                    className={({ isActive }): string => isActive ? "active" : "not_active"}
                >login</NavLink>
                <NavLink
                    to="register"
                    className={({ isActive }): string => isActive ? "active" : "not_active"}
                >register</NavLink>
            </nav>
        </header>
    );
}
export default Header;