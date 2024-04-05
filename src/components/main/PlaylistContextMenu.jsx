
const PlaylistContextMenu = () => {
   return (
      <ul
         className="absolute top-14 left-16 z-10 divide-y divide-[#3e3e3e]
                            bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default hidden group-hover:block text-nowrap">
         <li>
            <button
               className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add
               To
               Your
               Library</button>
         </li>
         <li className="relative">
            <button
               className="flex justify-between items-center w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
               Share
               <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                     d="m8.25 4.5 7.5 7.5-7.5 7.5" />
               </svg>
            </button>
            <ul
               className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
               <li>
                  <button
                     className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap">
                     Copy link to playlist</button>
               </li>
               <li>
                  <button
                     className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                     Embed playlist</button>
               </li>
            </ul>
         </li>
         <li>
            <button
               className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About
               recommendations</button>
         </li>
         <li>
            <button
               className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open
               in Desktop app</button>
         </li>
      </ul>
   )
}

export default PlaylistContextMenu