import "./style.css"
import { Outlet } from "react-router-dom"
import { SubHeader } from "../../h-component/header"

export default function Layout() {
    return (
        <>
            <SubHeader />
            <Outlet />
        </>
    )
}