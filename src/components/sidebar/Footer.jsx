import FooterListItem from "./FooterListItem"

const items = ['Cookies', 'Privacy']

const Footer = () => {
   return (
      <footer className="mt-auto mb-8 ml-6">
         <ul>
            {items.map((label) => (
               <FooterListItem key={label} label={label} />
            ))}
         </ul>
      </footer>
   )
}

export default Footer