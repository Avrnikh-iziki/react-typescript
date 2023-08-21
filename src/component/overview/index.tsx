import "./style.css"
import { FC } from "react"
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react"
import { Data } from "../../api"
import { LineChart } from "../../h-component/chart/line"
import { DoughutChart } from "../../h-component/chart/doughut"

export const loader = async () => {
    return defer({ data: await Data() })
}

export const Overview: FC = () => {
    const { data } = useLoaderData() as { data: number[][] }
    return (
        <>
            <Suspense fallback={<h3>Loading ...</h3>}>
                <Await resolve={data}>
                    <div className="c-shart-income">
                        <div className="line-income">
                            <LineChart da={data} />
                        </div>
                        <div className="pie-income" >
                            <DoughutChart da={data[0]} />
                        </div>
                    </div>
                </Await>
            </Suspense>
        </>
    );
}





















// import "./style.css"
// import { useLoaderData, defer, Await } from "react-router-dom";
// import { Suspense } from "react"
// import { Icome, Data , statics} from "../../api"
// import { store } from "../../store/store";
// import { LineChart } from "../../h-component/chart/line"
// import { DoughutChart } from "../../h-component/chart/doughut"
// import { IncomeSideBar } from "../../h-component/header";
// export const loader = async () => {
//     return defer({ data: await Icome(), data: await Data() , st: await  statics() })
// }
// const IncomeComponent = () => {
//     const username = store.getState()
//     const data: any = useLoaderData()

//     return (
//         <div className="c-income">
//             <Suspense fallback={<h3>Loading ...</h3>}>
//                 <Await resolve={data}>
//                         <IncomeSideBar />
//                     <div className="body-income">
//                         <div className="top-warper">
//                             <div className="personaldata-income">
//                                 <div className="usernmame" >
//                                     <div className="welcome-income">{`Welcome Back, ${username.Ruser.user.username}`}</div>
//                                     <div className="notation-income">here information about all your orders </div>
//                                 </div>
//                                 <div className="user-income" >
//                                     <div className="img"><img src="/search.png" alt="" /></div>
//                                     <div className="img"><img src="/notification.png" alt="" /></div>
//                                     <div className="img"><img src="/user.png" alt="" /><span> {username.Ruser.user.username}</span></div>
//                                 </div>

//                             </div>
//                             <div className="statics-income">
//                                 {
//                                     data.st.map((el:any, index:number) => {
//                                         return (
//                                             <div key={index} className="s-cart-income">
//                                                 <div className="top">
//                                                     <div className="top-left">
//                                                         <div className="total">{el.total}</div>
//                                                         <div className="title">{el.title}</div>
//                                                     </div>
//                                                     <div className="icon">
//                                                         <img src={el.icon} alt="income" />
//                                                     </div>
//                                                 </div>
//                                                 <div className="progress">+ {el.progress} % in this last week</div>
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </div>
//                         </div>
//                         <div className="c-shart-income">
//                             <div className="line-income">
//                                 <LineChart datas={data.data} />
//                             </div>
//                             <div className="pie-income" >
//                                 <DoughutChart datas={data.data[0]}  />
//                             </div>
//                         </div>
//                     </div>
//                 </Await>
//             </Suspense>
//         </div>
//     );
// }

// export default IncomeComponent;