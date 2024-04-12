import kanyeImg from "../imgs/9R3iDpMDwhQ.jpg"
import kaniiImg from "../imgs/6919ee38c2505ed21cce594bec9fb48f.1000x1000x1.png"
import tainyImg from "../imgs/96925dde76903dc734373047abc4c34c.1000x1000x1.jpg"
import okgiorgioImg from "../imgs/artworks-SjTdhTrYeVh8-0-t500x500.jpg"
import fredImg from "../imgs/HHV96HRA2VY.jpg"
import bleachersImg from "../imgs/M5JyOELGJro.jpg"
import joyrydeImg from "../imgs/X4wa-1frB38.jpg"
import gesaffelsteinImg from "../imgs/RlLQAEGox0M.jpg"
import wallowsImg from "../imgs/d6eaf4d3c38bb9e77ea8b53169bf0676.700x700x1.jpg"
import khruangbinImg from "../imgs/8613c1245a72680007e0280d1f4ac661.1000x1000x1.jpg"
import jamieImg from "../imgs/VtuZH953J4c.jpg"
import nikkoImg from "../imgs/XspYMr72YHM.jpg"
import Playlist from "./main/Playlist"

const playlists = [
   {
      id: crypto.randomUUID(),
      title: 'tell me',
      descr: 'kanii, Riovaz & Nimstarr',
      img: kaniiImg,
      classes: ""
   },
   {
      id: crypto.randomUUID(),
      title: 'VULTURES 1',
      descr: 'Kanye West',
      img: kanyeImg,
      classes: "hidden sm:block"
   },
   {
      id: crypto.randomUUID(),
      title: 'roadhead',
      descr: 'Tainy',
      img: tainyImg,
      classes: "hidden lg:block"
   },
   {
      id: crypto.randomUUID(),
      title: 'ok',
      descr: 'okgiorgio',
      img: okgiorgioImg,
      classes: "hidden xl:block"
   },
   {
      id: crypto.randomUUID(),
      title: 'tell me',
      descr: 'kanii, Riovaz & Nimstarr',
      img: kaniiImg,
      classes: "hidden 2xl:block"
   },
   {
      id: crypto.randomUUID(),
      title: 'VULTURES 1',
      descr: 'Kanye West',
      img: kanyeImg,
      classes: "hidden 3xl:block"
   },
   {
      id: crypto.randomUUID(),
      title: 'roadhead',
      descr: 'Tainy',
      img: tainyImg,
      classes: "hidden 4xl:block"
   },
   {
      id: crypto.randomUUID(),
      title: 'ok',
      descr: 'okgiorgio',
      img: okgiorgioImg,
      classes: "hidden 5xl:block"
   },
   {
      id: crypto.randomUUID(),
      title: 'VULTURES 1',
      descr: 'Kanye West',
      img: kanyeImg,
      classes: "hidden 6xl:block"
   },
]

const TheMain = () => {
   return (
      <main className="text-[#FFF0C4] relative">
         <div className="h-[275px] bg-gradient-to-b from-[#211E1E] to-[#121212] absolute w-full"></div>
         <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
            <div>
               <div className="flex flex-wrap justify-between gap-x-6 items-end mb-[18px]">
                  <div>
                     <h2 className="text-2xl font-semibold hover:underline capitalize">
                        <a href="#">Only new</a>
                     </h2>
                  </div>
                  <a className="text-xs uppercase font-semibold tracking-widest hover:underline text-[#8EAFC0] leading-6"
                     href="#">See all</a>
               </div>
               <div
                  className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                  {playlists.map(playlist => (
                     <Playlist key={playlist.id}  {...playlist} />
                  ))}

                  {/* <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden sm:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden lg:block">
                     <div className="mb-4 relative">
                        <img src={tainyImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">roadhead</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Tainy</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden xl:block">
                     <div className="mb-4 relative">
                        <img src={okgiorgioImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">ok</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">okgiorgio</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 2xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 3xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 4xl:block">
                     <div className="mb-4 relative">
                        <img src={tainyImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">roadhead</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Tainy</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 5xl:block">
                     <div className="mb-4 relative">
                        <img src={okgiorgioImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">ok</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">okgiorgio</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 6xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a> */}
               </div>

               <div className="flex flex-wrap justify-between gap-x-6 items-end mb-[18px]">
                  <div>
                     <h2 className="text-2xl font-semibold hover:underline capitalize">
                        <a href="#">Recently listened</a>
                     </h2>
                  </div>
                  <a className="text-xs uppercase font-semibold tracking-widest hover:underline text-[#8EAFC0] leading-6"
                     href="#">See all</a>
               </div>
               <div
                  className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                  <a href="#" className="relative p-4 rounded-md hover:bg-[#191919] duration-200 group">
                     <div className="mb-4 relative">
                        <img src={fredImg} alt="" className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">stayinit</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Fred again..</p>
                     <ul
                        className="absolute top-14 left-16 z-10 divide-y divide-[#3e3e3e]
                            bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default hidden group-hover:block text-nowrap">
                        <li>
                           <button
                              className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add
                              To
                              Your
                              Library</button>
                        </li>
                        <li className="relative">
                           <button
                              className="flex justify-between items-center w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                              Share
                              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                           </button>
                           <ul
                              className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                              <li>
                                 <button
                                    className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap">
                                    Copy link to playlist</button>
                              </li>
                              <li>
                                 <button
                                    className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                                    Embed playlist</button>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <button
                              className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About
                              recommendations</button>
                        </li>
                        <li>
                           <button
                              className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open
                              in Desktop app</button>
                        </li>
                     </ul>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden sm:block">
                     <div className="mb-4 relative">
                        <img src={bleachersImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">Tiny Moves</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Bleachers</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden lg:block">
                     <div className="mb-4 relative">
                        <img src={joyrydeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">I'M GONE</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">JOYRYDE</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden xl:block">
                     <div className="mb-4 relative">
                        <img src={gesaffelsteinImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">Lost Love</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Gesaffelstein</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 2xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 3xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 4xl:block">
                     <div className="mb-4 relative">
                        <img src={tainyImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">roadhead</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Tainy</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 5xl:block">
                     <div className="mb-4 relative">
                        <img src={okgiorgioImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">ok</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">okgiorgio</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 6xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
               </div>

               <div className="flex flex-wrap justify-between gap-x-6 items-end mb-[18px]">
                  <div>
                     <h2 className="text-2xl font-semibold hover:underline capitalize">
                        <a href="#">Just for you</a>
                     </h2>
                  </div>
                  <a className="text-xs uppercase font-semibold tracking-widest hover:underline text-[#8EAFC0] leading-6"
                     href="#">See all</a>
               </div>
               <div
                  className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                  <a href="#" className="relative p-4 rounded-md hover:bg-[#191919] duration-200 group">
                     <div className="mb-4 relative">
                        <img src={wallowsImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">Calling After Me</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Wallows</p>
                     <ul
                        className="absolute top-14 left-16 z-10 divide-y divide-[#3e3e3e]
                            bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default hidden group-hover:block text-nowrap">
                        <li>
                           <button
                              className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add
                              To
                              Your
                              Library</button>
                        </li>
                        <li className="relative">
                           <button
                              className="flex justify-between items-center w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                              Share
                              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                           </button>
                           <ul
                              className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                              <li>
                                 <button
                                    className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default text-nowrap">
                                    Copy link to playlist</button>
                              </li>
                              <li>
                                 <button
                                    className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                                    Embed playlist</button>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <button
                              className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About
                              recommendations</button>
                        </li>
                        <li>
                           <button
                              className=" w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open
                              in Desktop app</button>
                        </li>
                     </ul>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden sm:block">
                     <div className="mb-4 relative">
                        <img src={khruangbinImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">A Love International</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Khruangbin</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden lg:block">
                     <div className="mb-4 relative">
                        <img src={jamieImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">It's So Good</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Jamie xx</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden xl:block">
                     <div className="mb-4 relative">
                        <img src={nikkoImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">BETTER4U</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">nikko</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 2xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 3xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 4xl:block">
                     <div className="mb-4 relative">
                        <img src={tainyImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">roadhead</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Tainy</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 5xl:block">
                     <div className="mb-4 relative">
                        <img src={okgiorgioImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">ok</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">okgiorgio</p>
                  </a>
                  <a href="#" className="p-4 rounded-md hover:bg-[#191919] duration-200 group hidden 6xl:block">
                     <div className="mb-4 relative">
                        <img src={kanyeImg} className="rounded shadow-lg" />
                        <button
                           className="h-10 w-10 rounded-full bg-[#1ED760] shadow-xl absolute right-1 bottom-1 flex justify-center
                              items-center cursor-auto duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                           </svg>
                        </button>
                     </div>
                     <h3 className="mb-1 font-semibold">VULTURES 1</h3>
                     <p className="text-sm text-[#9C9C9C] line-clamp-2">Kanye West</p>
                  </a>
               </div>
            </div>

         </div>
      </main>
   )
}

export default TheMain