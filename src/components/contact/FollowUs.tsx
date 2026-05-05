import SocialLinks from "@/data/contact";
import SocialIcon from "./SocialIcon";

const FollowMap = () => {
    return (
        <div>
            <p className="text-[48px] font-inter text-center text-bmes-blue-200">Follow us on</p>
            <div className="flex flex-row gap-25 justify-center item-center mt-2 mb-10">
                {SocialLinks.map( (item) => (
                    <SocialIcon icon={item.icon} url={item.url}/>
                )) }
            </div>
        </div>
    );
};

export default FollowMap;