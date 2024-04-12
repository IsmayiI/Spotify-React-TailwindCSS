import { ChevronRightIcon } from '@heroicons/react/24/outline'
import PlaylistContextMenu from './PlaylistContextMenu'

const PlaylistContextMenuItem = ({ label, subMenuItems }) => {

   let btnClasses = 'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap'

   if (subMenuItems) {
      return (
         <li className='relative'>
            <button className={`${btnClasses} flex justify-between items-center peer`}>
               {label}
               <ChevronRightIcon className="h-4 w-4" />
            </button>
            <PlaylistContextMenu menuItems={subMenuItems}
               classes="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default invisible peer-hover:visible hover:visible" />
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