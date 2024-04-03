import { HomeIcon, MagnifyingGlassIcon, ViewColumnsIcon, PlusIcon, HeartIcon } from '@heroicons/react/24/outline'

const activeNavItemClasses = 'flex items-center text-white bg-[#232323] mx-2 px-4 py-2 rounded'
const navItemClasses = 'flex items-center hover:text-white duration-300 mx-2 px-4 py-2 rounded'

const navItems = [
   {
      label: 'Home',
      classes: activeNavItemClasses,
      icon: <HomeIcon className='h-6 w-6' />
   },
   {
      label: 'Search',
      classes: navItemClasses,
      icon: <MagnifyingGlassIcon className='h-6 w-6' />
   },
   {
      label: 'Your Library',
      classes: `${navItemClasses} mb-6`,
      icon: <ViewColumnsIcon className='h-6 w-6' />
   },
   {
      label: 'Create Playlist',
      classes: navItemClasses,
      icon: <PlusIcon className='h-6 w-6' />
   },
   {
      label: 'Liked Songs',
      classes: navItemClasses,
      icon: <HeartIcon className='h-6 w-6' />
   },
]

const Navigation = () => {
   return (
      <nav>
         {navItems.map(({ label, classes, icon }) => (
            <a key={label} href="#" className={classes}>
               {icon}
               <span className="ml-4 text-sm font-semibold">{label}</span>
            </a>
         ))}
      </nav>
   )
}

export default Navigation