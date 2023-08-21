import "./style.css"
import LoginComponent from "../../component/login/index"
import { FC } from 'react'
const Login:FC = () => {
  return (
    <div className="container">
      <LoginComponent />
    </div>
  );
}

export default Login;