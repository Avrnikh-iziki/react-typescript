import "./style.css"
import { Suspense } from "react"
import { defer, useLoaderData, Await} from "react-router-dom";
import { getOneproduct } from "../../api/index"
import { FC } from "react"
import { Product } from "../../utiles/types"

export const loader = async ({ params }:any ) => {
    return defer({ product: await getOneproduct(params.id) })
}

const ProductComponent: FC = () => {
    const { product } = useLoaderData() as { product: Product }

    return (
        <div className="c-oneproduct">
            <h5>Simple Product detail</h5>
            <Suspense fallback={<h1>loading ...</h1>}>
                <Await resolve={product}>
                    <div className="c-container-oneproduct">
                        <div className="image-oneproduct" style={{ backgroundImage: `url(${product.image})` }} />
                        <div className="detail-onproduct" >
                            <div>{product.name}</div>
                            <div>{product.price} $</div>
                            <div>{product.description}Sure, I'd be happy to help you generate a product example text. However, I'll need a bit more information about the product you have in mind. Please provide me with details about the product, its features, benefits, target audience, and any specific points you'd like to highlight. This will help me create a more tailored and accurate product example text for you.</div>
                        </div>
                    </div>
                </Await>
            </Suspense>
        </div>
    );
}

export default ProductComponent;