import { ChevronLeftIcon, ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/outline'
import BtnRegister from './header/BtnRegister'
import BtnLogin from './header/BtnLogin'


const TheHeader = () => {
   return (
      <header
         className="bg-[#0D1016] flex items-center justify-between  py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
         <div className="flex">
            <a href="#sidebar" className="p-1 mr-[8px] -ml-1.5 inline-block lg:hidden">
               <Bars3Icon className='h-6 w-6' color='#909294' />
            </a>
            <a href="#" className="p-1 cursor-not-allowed mr-[8px]">
               <ChevronLeftIcon className='h-6 w-6' color='#909294' />
            </a>
            <a href="#" className="p-1 cursor-not-allowed ml-[8px]">
               <ChevronRightIcon className='h-6 w-6' color='#909294' />
            </a>
         </div>
         <div>
            <BtnRegister />
            <BtnLogin />
         </div>
      </header>
   )
}

export default TheHeader