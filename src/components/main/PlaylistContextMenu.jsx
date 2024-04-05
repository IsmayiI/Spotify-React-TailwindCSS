import PlaylistContextMenuItem from "./PlaylistContextMenuItem"
import PlaylistContextSubmenu from "./PlaylistContextSubmenu"


const menuItems = [
   {
      label: 'Add To Your Library'
   },
   {
      label: 'Share'
   },
   {
      label: 'About recommendations'
   },
   {
      label: 'Open in Desktop app'
   },
]

const PlaylistContextMenu = () => {
   return (
      <ul className="absolute top-14 left-16 z-10 divide-y divide-[#3e3e3e]
                            bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default hidden group-hover:block text-nowrap">
         {menuItems.map(({ label }) => (
            <PlaylistContextMenuItem key={label} label={label} />
         ))}

         {/* <li className="relative">
            <button
               className="flex justify-between items-center w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
               Share
               <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                     d="m8.25 4.5 7.5 7.5-7.5 7.5" />
               </svg>
            </button>
            <PlaylistContextSubmenu />
         </li> */}
      </ul>
   )
}

export default PlaylistContextMenu