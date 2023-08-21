import "./style.css"
import RegisterComponent from "../../component/register/index"
import { FC } from 'react'
const Register:FC = () => {
    return (
        <div className="container">
            <RegisterComponent />
        </div>
    );
}

export default Register;