

const PlaylistContextMenuItem = ({ label, onMouseEnter: closePreviousSubmenuIfOpen }) => {
   let btnClasses = 'w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap'

   return (
      <li onMouseEnter={() => closePreviousSubmenuIfOpen()}>
         <button className={btnClasses}>
            {label}
         </button>
      </li>
   )
}

export default PlaylistContextMenuItem