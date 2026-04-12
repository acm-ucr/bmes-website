import Example from "./Example";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        <Example text1="Adjust" text2="These" text3="Props" />
      </div>
    </>
  );
};

export default Home;
