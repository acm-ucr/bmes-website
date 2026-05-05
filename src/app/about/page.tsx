import Header from "@/components/Header";
import aboutHeader from "@/public/headers/aboutHeader.webp";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";

const About = () => {
  return (
    <div>
      <Header title="Our Promise" image={aboutHeader} />
      <Mission />
      <Vision />
    </div>
  );
};

export default About;
