import Header from "@/components/Header";
import homeHeader from "@/public/headers/homeHeader.webp";
import Landing from "@/components/home/Landing";

const Home = () => {
  return (
    <div>
      <Header
        title="BIOMEDICAL ENGINEERING SOCIETY AT UCR"
        image={homeHeader}
      />
      <Landing />
    </div>
  );
};

export default Home;
