import Header from "@/components/Header";
import BoardHeader from "@/public/boardHeader.webp";
import Vision from "@/components/about/Vision";

const About = () => {
  return (
    <div>
      <Header title="Executive Board" subtitle="25-26" image={BoardHeader} />
      <Vision />
    </div>
  );
};

export default About;
