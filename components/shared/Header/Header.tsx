import Navbar from "./Navbar"
import TopBar from "./TopBar"




const Header = () => {
  return (
    <header className="border-b border-b-gray-700 dark:border-b-slate-200">
    <TopBar />
    <Navbar />
    </header>
  )
}

export default Header