
const PlaylistContextMenuItem = ({ label }) => {
   return (
      <li>
         <button className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap">
            {label}
         </button>
      </li>
   )
}

export default PlaylistContextMenuItem