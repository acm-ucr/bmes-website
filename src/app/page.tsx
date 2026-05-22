import Image from "next/image";
import Header from "@/components/Header";
import homeHeader from "@/public/headers/homeHeader.webp";
import SmallHomeHeader from "@/public/headers/mobileHomeHeader.webp";
import Landing from "@/components/home/Landing";

const Home = () => {
  return (
    <div>
      <Header
        title="BIOMEDICAL ENGINEERING SOCIETY AT UCR"
        image={homeHeader}
        mobileImage={SmallHomeHeader}
      />
      <Landing />
    </div>
  );
};

export default Home;
