import SocialLinks from "@/data/contact";
import SocialIcon from "./SocialIcon";

const FollowMap = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <p className="text-bmes-blue-200 text-center text-5xl">
        Follow us on
      </p>
      <div className="item-center mt-2 mb-10 flex justify-between w-1/2">
        {SocialLinks.map(({icon, url}, index) => (
          <SocialIcon key={index} icon={icon} href={url} />
        ))}
      </div>
    </div>
  );
};

export default FollowMap;
