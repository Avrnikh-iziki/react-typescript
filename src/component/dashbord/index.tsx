import "./style.css"
import { Suspense, FC } from "react"
import { getallproducts } from "../../api"
import { useLoaderData, defer, Await, NavLink } from "react-router-dom"
import { Product } from "../../utiles/types"
import { useDispatch } from "react-redux"
import { add } from "../../store/product"


export const loader = async () => {
    return defer({ product: await getallproducts() })
}
const DashbordComponent: FC = () => {

    const dispatch = useDispatch()
    const addProduct = (product: Product) => {
        dispatch(add(product))
        const element = document.getElementById('add')
        if (element) {
            element.style.display = "block";
            setTimeout(() => {
                element.style.display = "none";
            }, 1000)
        }
    }
    const { product } = useLoaderData() as { product: Product[] }

    return (
        <div className="c-dashbord">
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={product}>
                    <div className="cart-dashbord">
                        <div className="des-dashbord">An effective product page is a critical component of any online retail website. It serves as a virtual storefront where potential customers can learn about a product, its features, benefits, and make informed purchase decisions. A well-crafted product page engages visitors, provides essential information, and ultimately converts them into buyers. Here's an introduction to creating a compelling product page:</div>
                        {product.map((el: Product, index: number) => {
                            return (
                                <div key={index} className="c-cart">
                                    <div className="image-cart" style={{ backgroundImage: `url(${el.image})` }} />
                                    <div className="detail-cart">
                                        <div className="name-product">{el.name}</div>
                                        <div className="price-product">{el.price}</div>
                                        <div className="des-product">{el.description}</div>
                                        <div className="button-product">
                                            <div className="add-product button" onClick={() => addProduct(el)}>add</div>
                                            <NavLink to={`${el.id}`} className="detail-product button">details</NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Await>
            </Suspense>
            <div id="add" className="add-alert">product added to cart</div>
        </div>
    );
}

export default DashbordComponent;