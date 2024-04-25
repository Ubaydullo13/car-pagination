import { NavLink, Outlet } from "react-router-dom"

function Header() {
  return (
    <>
    <header className="bg-cyan-950 p-5 text-white mb-7">
        <div className="container flex items-center justify-between">
        <h1 className="text-3xl">Cars</h1>
         <div className="flex items-center gap-4 text-xl">
            <NavLink className={({isActive}) => isActive ? "text-teal-400 bg-slate-900 px-2 py-1 rounded" : "px-2 py-1"} to="/">Click</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-teal-400 bg-slate-900 px-2 py-1 rounded" : "px-2 py-1"} to="/scroll">Scroll</NavLink>
         </div>
        </div>
    </header>
    <main className="container">
        <Outlet/>
    </main>
    </>
  )
}

export default Header