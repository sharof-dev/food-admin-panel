import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/header/Header"
import SideBar from "../components/sidebar/SideBar"
// import { LayoutProps } from "../types/layout/layout"
import { useState } from "react"
import { getItem } from "../lib/utils/storage"

const MainLayout = () => {
    const [activeMenu, setActiveMenu] = useState("dashboard")
    const auth = getItem("auth")
    if (!auth) {
        return <Navigate to="/login" />
    }
    return (
        <div className="flex bg-[#F6F8FA] h-screen">
            <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <main className="flex-1 p-4 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout
