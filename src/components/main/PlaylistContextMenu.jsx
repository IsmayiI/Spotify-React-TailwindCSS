import { useEffect } from "react"
import PlaylistContextMenuItem from "./PlaylistContextMenuItem"

const PlaylistContextMenu = ({ menuItems, classes, onClose }) => {

   useEffect(() => {
      document.addEventListener('mousedown', onClose)

      return () => {
         document.removeEventListener('mousedown', onClose)
      }
   })

   return (
      <ul className={classes}>
         {menuItems.map(({ label, subMenuItems }) => (
            <PlaylistContextMenuItem key={label} subMenuItems={subMenuItems} label={label} />
         ))}
      </ul>
   )
}

export default PlaylistContextMenu