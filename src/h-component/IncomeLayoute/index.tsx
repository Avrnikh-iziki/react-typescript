import "./style.css"
import { FC } from "react"
import { useLoaderData, defer, Await, Outlet } from "react-router-dom";
import { Suspense } from "react"
import { statics } from "../../api"
import { store } from "../../store/store";
import { Statics } from "./statics";
import { IncomeSideBar } from "../../h-component/header";
import { User, Cart } from "../../utiles/types"
export const loader = async () => {
    return defer({ data: await statics() })
}
const IncomeLayoute: FC = () => {
    const username: User = store.getState().Ruser
    const { data } = useLoaderData() as { data: Cart[] }
    return (
        <div className="c-income">
            <Suspense fallback={<h3>Loading ...</h3>}>
                <Await resolve={data}>
                    <IncomeSideBar />
                    <div className="body-income">
                        <Statics username={username.user.username} data={data} />
                        <Outlet />
                    </div>
                </Await>
            </Suspense>
        </div>
    );
}

export default IncomeLayoute;