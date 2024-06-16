import { ChevronRightIcon } from '@heroicons/react/24/outline'
import PlaylistContextMenu from './PlaylistContextMenu'
import { useEffect, useRef, useState } from 'react'

const PlaylistContextMenuItemWithSubmenu = ({ label, subMenuItems }) => {
   const [menuState, setMenuState] = useState({
      isOpen: false,
      positionClasses: ''
   })
   const menuItemRef = useRef(null)
   let closeMenuTimer = null

   const getMenuPositionClass = () => {
      const menuItem = menuItemRef.current

      const menuWidth = menuItem.offsetWidth
      const menuHeight = menuItem.offsetHeight * subMenuItems.length
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight


      const menuItemCoordX = menuItem.getBoundingClientRect().right

      const menuItemCoordY = menuItem.getBoundingClientRect().bottom

      const shouldMoveMenuLeft = menuWidth > windowWidth - menuItemCoordX
      const shouldMoveMenuTop = menuHeight > windowHeight - menuItemCoordY

      return {
         x: shouldMoveMenuLeft ? 'right-full' : 'left-full',
         y: shouldMoveMenuTop ? 'bottom-0' : 'top-0'
      }
   }

   const openMenu = () => {
      if (closeMenuTimer) {
         stopCloseMenuTimer()

         return
      }
      const { x, y } = getMenuPositionClass()
      setMenuState({
         isOpen: true,
         positionClasses: `${x} ${y}`
      })
   }

   const closeMenu = () => {
      setMenuState({
         isOpen: false,
         positionClasses: ''
      })
   }

   const startCloseMenuTimer = () => {
      closeMenuTimer = setTimeout(closeMenu, 1000)
   }

   const stopCloseMenuTimer = () => {
      clearTimeout(closeMenuTimer)
   }

   useEffect(() => stopCloseMenuTimer)


   let btnClasses = 'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap'


   return (
      <li ref={menuItemRef} className='relative' onMouseEnter={openMenu} onMouseLeave={startCloseMenuTimer}>
         <button className={`${btnClasses} flex justify-between items-center`}>
            {label}
            <ChevronRightIcon className="h-4 w-4" />
         </button>
         {menuState.isOpen && (
            <PlaylistContextMenu menuItems={subMenuItems}
               classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute ${menuState.positionClasses}`} />
         )}

      </li>
   )

}

export default PlaylistContextMenuItemWithSubmenu