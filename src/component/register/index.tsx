import "./style.css"
import { useState } from "react"
import { User } from "../../utiles/types"
import { register } from "../../api/index"
import { useNavigate } from "react-router-dom";
import { FC } from "react"
const RegisterComponent: FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [err, setErr] = useState("")
  const navigate = useNavigate()

  const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const getUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const submit = async () => {
    try {
      if (email && password && username) {
        const user: User = await register(email, password, username)
        if (user)
          return navigate('/login')
      }
      setErr('all field are requierd')
    } catch (err: any) {
      setErr(err)
    }
  }

  return (
    <div className="c-register">
      <h4 className="h-register">Add new account</h4>
      <form className="f-register"
      >
        <input
          className="i-register"
          name="email"
          type="email"
          placeholder="Email address"
          onChange={getEmail}
        />
        <input
          className="i-register"
          name="username"
          type="text"
          placeholder="username"
          onChange={getUsername}
        />
        <input
          className="i-register"
          name="password"
          type="password"
          placeholder="Password"
          onChange={getPassword}
        />
        <div className="d-register">
          < input
            className="i-register"
            value="Register"
            type="button"
            onClick={submit}
          />
          <div className="h-account-register">
            <a href="/login">
              Click her to Login?
            </a>
          </div>
        </div>

      </form>
      {err && <div className="err-register">{err}</div>}
    </div>
  );
}

export default RegisterComponent;