import Link from "next/link";
import { IService } from "../interfaces"
import Button from "./Ui/Button"

interface IProps {
service: IService;
}

const handleClick = () => {
  window.location.href = 'https://mammutfm.ch/contact-us/';
};
const ServicesCard = ({service} : IProps) =>{
return (
    <div className=" rounded-lg flex flex-col space-y-6 shadow-md	bg-white">
        <img 
        src={service.imageURL} alt={service.title}
        />
       <div className="p-3">
        <Link href={service.linkUrl} className="flex flex-row justify-start space-x-2 items-center mb-3">
          <img 
          src={service.titleImage} alt={service.title}
          />  
        <h3 className="font-bold text-xl">{service.title}</h3>
        </Link>
        <p className="text-black font-semibold pr-24">{service.description}</p>
        <Button onClick={handleClick}
        className=" text-white text-center mt-10 py-3 px-4 text-xs rounded-lg font-medium dark-button-animation"
        >Book Now</Button>
    </div>
    </div>
)
}
export default ServicesCard