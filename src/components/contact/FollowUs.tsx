import SocialLinks from "@/data/contact";
import SocialIcon from "./SocialIcon";


const FollowMap = () => {
 return (
   <div>
     <p className="font-inter text-bmes-blue-200 text-center text-[48px]">
       Follow us on
     </p>
     <div className="item-center mt-2 mb-10 flex flex-row justify-center gap-25">
       {SocialLinks.map((item) => (
         <SocialIcon icon={item.icon} url={item.url} />
       ))}
     </div>
   </div>
 );
};


export default FollowMap;