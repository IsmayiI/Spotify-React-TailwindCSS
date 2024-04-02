import Footer from "./sidebar/Footer"
import Logo from "./sidebar/Logo"
import Navigation from "./sidebar/Navigation"

const TheSideBar = () => {
   return (
      <aside
         id="sidebar"
         className="peer bg-black w-[256px] text-[#B3B3B3] overflow-hidden flex flex-col fixed lg:sticky top-0 z-30 h-screen 
         lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform">
         <Logo />
         <Navigation />
         <Footer />
      </aside>
   )
}

export default TheSideBar