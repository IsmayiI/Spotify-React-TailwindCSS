import { useEffect, useRef } from "react"
import PlaylistContextMenuItem from "./PlaylistContextMenuItem"

const PlaylistContextMenu = ({ menuItems, classes, onClose: handleClose }) => {

   const menuRef = useRef(null)

   useEffect(() => {
      function handleClickAway(e) {
         if (!menuRef.current.contains(e.target)) {
            handleClose()
         }
      }

      document.addEventListener('mousedown', handleClickAway)

      return () => {
         document.removeEventListener('mousedown', handleClickAway)
      }
   })

   return (
      <ul ref={menuRef} className={classes}>
         {menuItems.map(({ label, subMenuItems }) => (
            <PlaylistContextMenuItem key={label} subMenuItems={subMenuItems} label={label} />
         ))}
      </ul>
   )
}

export default PlaylistContextMenu