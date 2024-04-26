
import PlaylistBtnPlay from "./PlaylistBtnPlay"
import PlaylistDescr from "./PlaylistDescr"
import PlaylistImg from "./PlaylistImg"
import PlaylistTitle from "./PlaylistTitle"
import PlaylistContextMenu from "./PlaylistContextMenu"
import { useLayoutEffect, useRef, useState } from "react"

const menuItems = [
   {
      label: 'Add To Your Library'
   },
   {
      label: 'Share',
      subMenuItems: [
         {
            label: 'Copy link to playlist'
         },
         {
            label: 'Embed playlist'
         }
      ]
   },
   {
      label: 'About recommendations'
   },
   {
      label: 'Open in Desktop app'
   },
]

const menuClasses = `fixed z-10 divide-y divide-[#3e3e3e]
 text-[#eaeaea] bg-[#282828] text-sm p-1 rounded shadow-xl cursor-default text-nowrap`


const clickPosition = { x: null, y: null }


const Playlist = ({ title, descr, img, classes, toggleScrolling }) => {

   const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)

   const contextMenuRef = useRef(null)

   const bgClasses = isContextMenuOpen ? 'bg-[#191919]' : ''

   const updateContextMenuPosition = () => {
      contextMenuRef.current.style.top = `${clickPosition.y}px`
      contextMenuRef.current.style.left = `${clickPosition.x}px`
   }

   const openContextMenu = (e) => {
      e.preventDefault()

      clickPosition.x = e.clientX
      clickPosition.y = e.clientY


      setIsContextMenuOpen(true)
   }

   const closeContextMenu = () => {
      setIsContextMenuOpen(false)
   }

   useLayoutEffect(() => {
      toggleScrolling(!isContextMenuOpen)

      if (isContextMenuOpen) {
         updateContextMenuPosition()
      }
   }, [isContextMenuOpen])


   return (
      <a
         href="#"
         className={`relative p-4 rounded-md  hover:bg-[#191919] duration-200 group ${classes} ${bgClasses}`}
         onContextMenu={openContextMenu} >
         <div className="mb-4 relative">
            <PlaylistImg img={img} />
            <PlaylistBtnPlay />
         </div>
         <PlaylistTitle title={title} />
         <PlaylistDescr descr={descr} />
         {isContextMenuOpen && <PlaylistContextMenu ref={contextMenuRef} onClose={closeContextMenu} menuItems={menuItems} classes={menuClasses} />}
      </a>
   )
}

export default Playlist