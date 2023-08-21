import "./style.css"
import { FC } from "react"
const Fotter: FC = () => {
    return (
        <div className="c-footer">
            <div className="f-logo">  #React </div>
            <div >&copy; {new Date().getFullYear()} - avrnikh</div>
            <div >avrnikh@gmail.com</div>
        </div>
    );
}
export default Fotter;