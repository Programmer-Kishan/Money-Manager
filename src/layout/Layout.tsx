import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar/Navbar"

const Layout = () => {
  return (
    <div>
        <Navbar />
        <main>
            {/* Render the active page component here */}
            <Outlet />
        </main>
    </div>
  )
}

export default Layout