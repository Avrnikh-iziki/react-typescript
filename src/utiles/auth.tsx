import { Outlet, Navigate } from "react-router-dom"
import { FC } from 'react'
import { useSelector } from "react-redux"
import { User } from "./types"

const PrivateRoutes: FC = () => {
    const user = useSelector((state: { Ruser: User }) => state.Ruser.user)
    return (
        user.isLogin
            ? <Outlet />
            : <Navigate to="/login" />
    )
}

export default PrivateRoutes
