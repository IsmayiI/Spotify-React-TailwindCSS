import { ChevronRightIcon } from '@heroicons/react/24/outline'
import PlaylistContextMenu from './PlaylistContextMenu'

const PlaylistContextMenuItem = ({ label, subMenuItems }) => {

   let classes = ''
   let btnClasses = 'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap'
   let icon = null
   let subMenu = null

   if (subMenuItems) {
      classes = 'relative'
      btnClasses = `${btnClasses} flex justify-between items-center`
      icon = <ChevronRightIcon className="h-4 w-4" />
      subMenu = (
         <PlaylistContextMenu menuItems={subMenuItems}
            classes="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default" />
      )
   }

   return (
      <li className={classes}>
         <button className={btnClasses}>
            {label} {icon}
         </button>
         {subMenu}
      </li>
   )
}

export default PlaylistContextMenuItem