

const PlaylistContextMenuItem = ({ label }) => {
   let btnClasses = 'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap'

   return (
      <li>
         <button className={btnClasses}>
            {label}
         </button>
      </li>
   )
}

export default PlaylistContextMenuItem