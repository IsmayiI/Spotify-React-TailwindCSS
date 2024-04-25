import { forwardRef, useEffect } from "react"
import PlaylistContextMenuItem from "./PlaylistContextMenuItem"

const PlaylistContextMenu = ({ menuItems, classes, onClose: handleClose }, ref) => {

   useEffect(() => {
      if (!handleClose) return

      function handleClickAway(e) {
         if (!ref.current.contains(e.target)) {
            handleClose()
         }
      }

      function handleEsc(e) {
         if (e.keyCode === 27) {
            handleClose()
         }
      }

      document.addEventListener('mousedown', handleClickAway)
      document.addEventListener('keydown', handleEsc)

      return () => {
         document.removeEventListener('mousedown', handleClickAway)
         document.removeEventListener('keydown', handleEsc)

      }
   })

   return (
      <ul ref={ref} className={classes}>
         {menuItems.map(({ label, subMenuItems }) => (
            <PlaylistContextMenuItem key={label} subMenuItems={subMenuItems} label={label} />
         ))}
      </ul>
   )
}

export default forwardRef(PlaylistContextMenu) 