import { ChevronRightIcon } from '@heroicons/react/24/outline'
import PlaylistContextMenu from './PlaylistContextMenu'
import { useRef, useState } from 'react'

const PlaylistContextMenuItem = ({ label, subMenuItems }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [menuPositionXClass, setMenuPositionXClass] = useState('left-full')
   const [menuPositionYClass, setMenuPositionYClass] = useState('bottom-0')
   const menuItemRef = useRef(null)

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
      setIsMenuOpen(true)
      const coord = getMenuPositionClass()
      setMenuPositionXClass(coord.x)
      setMenuPositionYClass(coord.y)
   } 

   const closeMenu = () => {
      setIsMenuOpen(false)
   }

   let btnClasses = 'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap'

   if (subMenuItems) {
      return (
         <li ref={menuItemRef} className='relative' onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <button className={`${btnClasses} flex justify-between items-center`}>
               {label}
               <ChevronRightIcon className="h-4 w-4" />
            </button>
            {isMenuOpen && (
            <PlaylistContextMenu menuItems={subMenuItems}
               classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute ${menuPositionYClass} ${menuPositionXClass}`} />
               )}
            
         </li>
      )
   }

   return (
      <li>
         <button className={btnClasses}>
            {label}
         </button>
      </li>
   )
}

export default PlaylistContextMenuItem