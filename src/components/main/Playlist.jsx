import kaniiImg from "../../imgs/6919ee38c2505ed21cce594bec9fb48f.1000x1000x1.png"

import PlaylistBtnPlay from "./PlaylistBtnPlay"
import PlaylistDescr from "./PlaylistDescr"
import PlaylistImg from "./PlaylistImg"
import PlaylistTitle from "./PlaylistTitle"
import PlaylistContextMenu from "./PlaylistContextMenu"



const Playlist = () => {
   return (
      <a href="#" className="relative p-4 rounded-md hover:bg-[#191919] duration-200 group">
         <div className="mb-4 relative">
            <PlaylistImg img={kaniiImg} />
            <PlaylistBtnPlay />
         </div>
         <PlaylistTitle />
         <PlaylistDescr />
         <PlaylistContextMenu />
      </a>
   )
}

export default Playlist