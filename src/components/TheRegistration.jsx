import RegistrationBtn from "./registration/RegistrationBtn"
import RegistrationInfo from "./registration/RegistrationInfo"

const TheRegistration = () => {
   return (
      <a href="#"
         className="text-white bg-gradient-to-r from-[#af2896] to-[#509bf5] py-4 px-8 flex justify-between items-center flex-wrap gap-x-6 gap-y-2">
         <RegistrationInfo />
         <RegistrationBtn />
      </a>
   )
}

export default TheRegistration