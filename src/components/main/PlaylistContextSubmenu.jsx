import PlaylistContextMenuItem from "./PlaylistContextMenuItem"


const PlaylistContextSubmenu = ({ subMenuItems }) => {
   return (
      <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
         {subMenuItems.map(({ label }) => (
            <PlaylistContextMenuItem key={label} label={label} />
         ))}
      </ul>
   )
}

export default PlaylistContextSubmenu