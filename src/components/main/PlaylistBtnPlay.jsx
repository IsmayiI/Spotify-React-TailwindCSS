import { ChevronRightIcon } from '@heroicons/react/24/outline'

const PlaylistBtnPlay = () => {
   return (
      <button
         className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
         <ChevronRightIcon className='h-5 w-5' />
      </button>
   )
}

export default PlaylistBtnPlay