// import { HomeIcon } from "@heroicons/react"
import { HomeIcon, MagnifyingGlassIcon, ViewColumnsIcon, PlusIcon, HeartIcon } from '@heroicons/react/24/outline'

const Navigation = () => {
   return (
      <nav>
         <a href="#" className="flex items-center text-white bg-[#232323] mx-2 px-4 py-2 rounded">
            <HomeIcon className='h-6 w-6' />
            <span className="ml-4 text-sm font-semibold">Home</span>
         </a>
         <a href="#" className="flex items-center hover:text-white duration-300 mx-2 px-4 py-2 rounded">
            <MagnifyingGlassIcon className='h-6 w-6' />
            <span className="ml-4 text-sm font-semibold">Search</span>
         </a>
         <a href="#" className="flex items-center hover:text-white duration-300 mx-2 px-4 py-2 rounded mb-6">
            <ViewColumnsIcon className='h-6 w-6' />
            <span className="ml-4 text-sm font-semibold">Your Library</span>
         </a>
         <a href="#" className="flex items-center hover:text-white duration-300 mx-2 px-4 py-2 rounded">
            <PlusIcon className='h-6 w-6' />
            <span className="ml-4 text-sm font-semibold">Create Playlist</span>
         </a>
         <a href="#" className="flex items-center hover:text-white duration-300 mx-2 px-4 py-2 rounded">
            <HeartIcon className='h-6 w-6' />
            <span className="ml-4 text-sm font-semibold">Liked Songs</span>
         </a>
      </nav>
   )
}

export default Navigation