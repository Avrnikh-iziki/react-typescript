import "./style.css"
import { FC } from "react"
import { useState } from "react"
import { User } from "../../utiles/types"
import { useDispatch } from "react-redux";
import { login } from "../../store/slice"
import { loginUser } from "../../api/index"
import { useNavigate } from "react-router-dom";
const LoginComponent: FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const submit = async () => {
        try {
            if (email && password) {
                const data: User = await loginUser(email, password)
                dispatch(login({ user: data.user }))
                navigate(-2) !== undefined
                    ? navigate(-2)
                    : navigate('/')

            }
            setErr('email or password missing ')
        } catch (err: any) {
            setErr(err)
        }
    }

    return (
        <div className="c-login">
            <h4 className="h-login">Sign in to your account</h4>
            <form className="f-login"
            >
                <input
                    className="i-login"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    onChange={getEmail}
                />
                <input
                    className="i-login"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={getPassword}
                />
                <div className="d-login">
                    < input
                        className="i-login"
                        value="Login"
                        type="button"
                        onClick={submit}
                    />
                </div>

            </form>
            {err && <div className="err-login">{err}</div>}
        </div>
    );
}

export default LoginComponent;