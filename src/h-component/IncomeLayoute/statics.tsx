import "./style.css"
import { Cart } from "../../utiles/types"
import { FC } from "react"
export const loader = async () => {
}
export const Statics:FC<{username:string , data:Cart[]}> = ({ username, data }) => {

    return (
        <div className="top-warper">
            <div className="personaldata-income">
                <div className="usernmame" >
                    <div className="welcome-income">{`Welcome Back, ${username}`}</div>
                    <div className="notation-income">here information about all your orders </div>
                </div>
                <div className="user-income" >
                    <div className="img"><img src="/search.png" alt="" /></div>
                    <div className="img"><img src="/notification.png" alt="" /></div>
                    <div className="img"><img src="/user.png" alt="" /><span> {username}</span></div>
                </div>
            </div>
            <div className="statics-income">
                {
                    data.map((el:Cart, index: number) => {
                        return (
                            <div key={index} className="s-cart-income">
                                <div className="top">
                                    <div className="top-left">
                                        <div className="total">{el.total}</div>
                                        <div className="title">{el.title}</div>
                                    </div>
                                    <div className="icon">
                                        <img src={el.icon} alt="income" />
                                    </div>
                                </div>
                                <div className="progress">+ {el.progress} % in this last week</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

