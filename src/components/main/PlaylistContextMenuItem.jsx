import { ChevronRightIcon } from '@heroicons/react/24/outline'
import PlaylistContextMenu from './PlaylistContextMenu'
import { useRef, useState } from 'react'

const PlaylistContextMenuItem = ({ label, subMenuItems }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [menuPositionClass, setMenuPositionClass] = useState('left-full')
   const menuItemRef = useRef(null)

   const getMenuPositionClass = () => {
      const menuItem = menuItemRef.current
      const menuWidth = menuItem.offsetWidth 
      const windowWidth = window.innerWidth

      const menuItemEndCoordinate = menuItem.getBoundingClientRect().right

      const shouldMoveMenuLeft = menuWidth > windowWidth - menuItemEndCoordinate

      return shouldMoveMenuLeft ? 'right-full' : 'left-full'
   }

   const openMenu = () => {
      setIsMenuOpen(true)
      setMenuPositionClass(getMenuPositionClass())
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
               classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute top-0 ${menuPositionClass}`} />
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