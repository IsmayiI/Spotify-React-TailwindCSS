
const TheHeader = () => {
   return (
      <header
         className="bg-[#0D1016] flex items-center justify-between  py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
         <div className="flex">
            <a href="#sidebar" className="p-1 mr-[8px] -ml-1.5 inline-block lg:hidden">
               <svg color="#909294" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
            </a>
            <a href="#" className="p-1 cursor-not-allowed mr-[8px]">
               <svg color="#909294" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
               </svg>
            </a>
            <a href="#" className="p-1 cursor-not-allowed ml-[8px]">
               <svg color="#909294" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
               </svg>
            </a>
         </div>
         <div>
            <button className="text-white text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full
               hover:scale-105 duration-200">Sign Up</button>
            <button className="bg-white text-[#2e2e2e] text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full
                   hover:scale-105 duration-200">Log In</button>
         </div>
      </header>
   )
}

export default TheHeader