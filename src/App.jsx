
import TheSideBar from "./components/TheSideBar"
import TheHeader from "./components/TheHeader"
import TheMain from "./components/TheMain"
import TheRegistration from "./components/TheRegistration"
import TheSidebarOverlay from "./components/TheSidebarOverlay"

function App() {

   return (
      <>
         <div className="flex flex-grow overflow-auto">
            <TheSideBar />
            <TheSidebarOverlay />

            <div className="flex-1 overflow-auto">
               <TheHeader />
               <TheMain />
            </div>
         </div>
         <TheRegistration />
      </>
   )
}

export default App
