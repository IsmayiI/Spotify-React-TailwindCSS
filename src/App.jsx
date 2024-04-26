
import TheSideBar from "./components/TheSideBar"
import TheHeader from "./components/TheHeader"
import TheMain from "./components/TheMain"
import TheRegistration from "./components/TheRegistration"
import TheSidebarOverlay from "./components/TheSidebarOverlay"
import { useEffect, useRef } from "react"

function App() {

   const contentWrapperRef = useRef(null)

   let isScrollingEnabled = true

   const toggleScrolling = (isEnabled) => {
      isScrollingEnabled = isEnabled
   }

   const handleScrolling = (e) => {
      if (isScrollingEnabled) return

      e.preventDefault()
      e.stopPropagation()
   }

   useEffect(() => {
      const contentWrapper = contentWrapperRef.current

      contentWrapper.addEventListener('wheel', handleScrolling)

      return () => {
         contentWrapper.removeEventListener('wheel', handleScrolling)
      }
   })

   return (
      <>
         <div className="flex flex-grow overflow-auto">
            <TheSideBar />
            <TheSidebarOverlay />

            <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
               <TheHeader />
               <TheMain toggleScrolling={toggleScrolling} />
            </div>
         </div>
         <TheRegistration />
      </>
   )
}

export default App
