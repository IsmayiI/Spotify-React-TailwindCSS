
const NavItem = ({ label, classes, icon }) => {
   return (
      <a key={label} href="#" className={classes}>
         {icon}
         <span className="ml-4 text-sm font-semibold">{label}</span>
      </a>
   )
}

export default NavItem