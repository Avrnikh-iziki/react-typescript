import { Outlet } from "react-router-dom"
import Header from "../header/index"
import Footer from "../footer/index"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}